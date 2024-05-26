import { Router } from "express";
import { deleteuser, login, oauth, signup, update } from "../controllers/usercontrollers.js";
import { auth } from "../controllers/auth.js";

const router=Router();

router.post("/",signup)

router.route("/login").post(login)
router.route("/oauth").post(oauth)
router.post("/update/:id",auth,update)
router.get("/delete/:id",auth,deleteuser)


export default router;

