import express  from "express";
import { auth } from "../controllers/auth.js";
import { createlisting } from "../controllers/listingcontroller.js";


const router = express.Router();

router.post("/",auth,createlisting)



export default router;
