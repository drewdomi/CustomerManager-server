import { Router } from "express";
import { customerController } from "../controllers/customers";

const router = Router();

router.get("/customers", customerController.getCustomers);

export default router;
