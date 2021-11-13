import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    // checking for authorization variable from request headers and checking Bearer as initialization
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // pulling out token
      token = req.headers.authorization.split(' ')[1]

      // verifying token using token from header and secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // adding user variable in req with all its details apart from password.. making it available in all req objects
      req.user = await User.findById(decoded.id).select('-password')

      // calling next step as it is to be used as a middleware function
      next()
    } catch (error) {
      console.error(error)

      // token failed or manipulated
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    // no token found
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
