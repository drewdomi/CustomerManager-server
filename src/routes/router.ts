import { Router } from "express";
import { customerController } from "../controllers/customers";
import { cpfController } from "../controllers/cpf";

const router = Router();

router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/find", customerController.findByParams);
router.get("/customers/:id", customerController.findById);
router.put("/customers/:id", customerController.editCustomer);
router.get("/", customerController.testApi);
router.get("/verify-cpf/:cpf", cpfController.verifyCpf);

export default router;
