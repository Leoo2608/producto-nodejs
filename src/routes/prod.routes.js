import { Router } from 'express'

const router = Router();

import * as prodCtr from '../controllers/prod.controller'

router.get('/', prodCtr.readAllProds);
router.get("/:id", prodCtr.readProd);
router.delete("/:id", prodCtr.delProd)
router.post("/", prodCtr.createProd);
router.put("/:id", prodCtr.updateProd)

export default router;