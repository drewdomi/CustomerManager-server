import { Router } from "express";
import { customerController } from "../controllers/customers";

const router = Router();

router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/find", customerController.findByParams);
router.get("/customers/:id", customerController.findById);
router.put("/customers/:id", customerController.editCustomer)

export default router;
