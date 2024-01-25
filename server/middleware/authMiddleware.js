import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler"
// import { errorHandler } from "./errorHandler.js";

// export const protectUser = asyncHandler(async (req, res, next) => {
  
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     let token;
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, "Shyam");
//       req.user = await User.findById(decoded.userId).select("-password");
//       if(req.user){
//         next();
//       }
//     } catch (error) {
//       throw new Error(error);
//     }
//     if (!token) {
//       throw new Error("Not authenticated, token failed")
//     }
//   }

// });

export const protectUser = asyncHandler(async (req, res, next) => {
  let token;
  const { id } = req.params;
  console.log(id);

  
  if (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "Shyam");

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authenticated, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authenticated, No token");
  }
});