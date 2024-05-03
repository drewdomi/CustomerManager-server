import { Router } from "express";
import { customerController } from "../controllers/customers";
import { cpfController } from "../controllers/cpf";
import { authController } from "../controllers/auth";
import { validateLogin } from "../middlewares/zod-valitation";
import { loginSchema } from "../schemas/login-schema";

const router = Router();

router.get("/customers", customerController.getCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/find", customerController.findByParams);
router.get("/customers/:id", customerController.findById);
router.put("/customers/:id", customerController.editCustomer);
router.get("/", customerController.testApi);
router.get("/verify-cpf/:cpf", cpfController.verifyCpf);

router.post("/login", validateLogin(loginSchema), authController.login);

export default router;
