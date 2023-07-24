import { Router } from "express";
import { customerController } from "../controllers/customers";

const router = Router();

router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/:id", customerController.findById);
router.get("/find", customerController.findByParams);

export default router;
