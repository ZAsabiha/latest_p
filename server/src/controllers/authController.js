

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// import bcrypt from 'bcryptjs';

// export const login = async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Please fill in all fields.' });
//   }

//   // Check if the user is an admin
//   const admin = await prisma.admin.findFirst({
//     where: { email: username }
//   });

//   // If admin is not found, check for employee or team lead
//   const employee = await prisma.employee.findFirst({
//     where: { email: username }
//   });

//   let user;

//   // If admin exists, authenticate as admin
//   if (admin) {
//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     if (isPasswordValid) {
//       user = {
//         id: admin.id,
//         email: admin.email,
//         role: 'ADMIN',
//       };
//     }
//   }

//   // If employee/team lead exists, authenticate as employee or team lead
//   if (!user && employee) {
//     const isPasswordValid = await bcrypt.compare(password, employee.password);
//     if (isPasswordValid) {
//       user = {
//         id: employee.id,
//         email: employee.email,
//         role: employee.role, // Use the employee's role (EMPLOYEE or TEAM_LEAD)
//       };
//     }
//   }

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // ✅ store minimal user data in session
//   req.session.user = user;

//   res.json({
//     message: 'Login successful',
//     user: req.session.user
//   });
// };

// export const logout = (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: 'Logout failed' });
//     }
//     res.clearCookie('connect.sid');
//     res.json({ message: 'Logged out' });
//   });
// };

// export const status = (req, res) => {
//   if (req.session.user) {
//     res.json({
//       loggedIn: true,
//       user: req.session.user
//     });
//   } else {
//     res.json({
//       loggedIn: false
//     });
//   }
// };
// src/controllers/authController.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const login = async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    username = String(username).trim();
    const plain = String(password);

    // 1) Try admin login
    const admin = await prisma.admin.findFirst({
      where: { email: username },
      select: { id: true, name: true, email: true, password: true }
    });

    if (admin) {
      const ok = await bcrypt.compare(plain, admin.password);
      if (ok) {
        req.session.user = {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: 'ADMIN'
        };
        return res.json({ message: 'Login successful', user: req.session.user });
      }
    }

    // 2) Try employee / team lead login
    const employee = await prisma.employee.findFirst({
      where: { email: username },
      select: {
        id: true, name: true, email: true, password: true, role: true,
        departmentId: true, position: true
      }
    });

    if (employee) {
      if (!employee.password) {
        return res.status(401).json({
          message: 'Account not activated. Please contact administrator.'
        });
      }

      const ok = await bcrypt.compare(plain, employee.password);
      if (ok) {
        req.session.user = {
          id: employee.id,
          name: employee.name,
          email: employee.email,
          role: employee.role, // 'EMPLOYEE' | 'TEAM_LEAD'
          departmentId: employee.departmentId ?? null,
          position: employee.position ?? null
        };
        return res.json({ message: 'Login successful', user: req.session.user });
      }
    }

    // 3) If neither matched
    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Login failed' });
  }
};

export const logout = (req, res) => {
  try {
    req.session.destroy(err => {
      if (err) {
        console.error('Logout error:', err);
        return res.status(500).json({ message: 'Logout failed' });
      }
      res.clearCookie('connect.sid'); // match session cookie name
      return res.json({ message: 'Logged out' });
    });
  } catch (err) {
    console.error('Logout error:', err);
    return res.status(500).json({ message: 'Logout failed' });
  }
};

export const status = (req, res) => {
  if (req.session?.user) {
    return res.json({
      loggedIn: true,
      user: req.session.user // includes role
    });
  }
  return res.json({ loggedIn: false });
};
