const {Router} = require("express")
const { getBebidas, postBebida } = require("../controllers/bebidas")
const {postReceta,getRecetas} = require("../controllers/recetas")
const {updateReceta, deleteReceta, deleteBebida} = require("../controllers/services")






const router = Router()

router.get("/recetas",getRecetas)
router.post("/recetas",postReceta)
router.put("/receta/:id",updateReceta)
router.delete("/recetas/delete/:id",deleteReceta)

//bebidas
router.get("/bebidas",getBebidas)
router.post("/bebidas",postBebida)
router.delete("/bebidas/delete/:id",deleteBebida)


module.exports=router;
