import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  signInUser,
  verifyUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/verify-user/:userId").get(verifyUser);
router.route("/get-user/:userId").get(getOneUser);
router.route("/getAll-user/").get(getAllUsers);
router.route("/signin-user/").post(signInUser);

export default router;
