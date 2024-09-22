import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";
import { HTTP } from "../utils/enums";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      fullName,
      email,
      password: hashed,
    });

    return res.status(HTTP.ok).json({
      message: "User Created Succesfully",
      data: user,
      status: HTTP.Created,
    });
  } catch (error) {
    return res.status(HTTP.Bad_Request).json({
      message: "Error Creating User",
      status: HTTP.Bad_Request,
    });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await userModel.findByIdAndUpdate(userId, { verify: true }, { new: true });

    return res.status(HTTP.Created).json({
      message: "User Has Been Verified",
      status: HTTP.Created,
    });
  } catch (error) {
    return res.status(HTTP.Bad_Request).json({
      message: "Error Verifying User",
      status: HTTP.Bad_Request,
    });
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findById(userId);

    return res.status(201).json({
      message: "User Gotten Succesfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();

    return res.status(201).json({
      message: "All Users Gotten Successfully",
      data: users,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Getting User",
      status: 404,
    });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      email,
    });

    if (user) {
      const passwordCheck = await bcrypt.compare(password, user?.password);

      if (passwordCheck) {
        if (user?.verify) {
          return res.status(201).json({
            message: "Welcome Back",
            data: user,
            status: 404,
          });
        } else {
          return res.status(404).json({
            message: "GO and Verify Your Account",
            status: 404,
          });
        }
      } else {
        return res.status(404).json({
          message: "Error With Password",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        Message: "Error With Email",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};
