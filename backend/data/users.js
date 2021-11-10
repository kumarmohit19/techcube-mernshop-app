import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harsh Kern',
    email: 'kern@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anjali Kashyap',
    email: 'anjali@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
