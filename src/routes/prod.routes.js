import { Router } from 'express'

const router = Router();

import * as prodCtr from '../controllers/prod.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken, prodCtr.readAllProds);
router.get("/:id", checkToken, prodCtr.readProd);
router.delete("/:id", checkToken, prodCtr.delProd)
router.post("/", checkToken, prodCtr.createProd);
router.put("/:id", checkToken, prodCtr.updateProd)

export default router;