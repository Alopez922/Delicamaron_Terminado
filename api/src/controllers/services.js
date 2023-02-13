const {Receta,Dieta,Bebida}=require("../db")
const axios = require("axios")


const getAllInfo = async()=>{
    try{
        const recetaInfo = await getDbInfo()
        return recetaInfo
    }catch(e){
        return console.log(e)
    }
}

const getDbInfo = async()=>{
    try{
        const recetaDb = await Receta.findAll({
            include:{
                model:Dieta,
                attributes:["nombre"],
            }
        })

        const recetaMap = recetaDb.map((receta)=>{
            return{
                id:receta.dataValues.id,
                nombre:receta.dataValues.nombre,
                descripcion:receta.dataValues.descripcion,
                imagen:receta.dataValues.imagen,
                precio:receta.dataValues.precio
            }
        })
        return recetaMap
    }catch(e){
        return console.log(e)
    }
}

const recetaToDb = async(data)=>{
    try{
        const {nombre,descripcion,imagen,precio} = data
        const [receta,created] = await Receta.findOrCreate({
            where:{nombre},
            defaults:{
                descripcion,
                imagen,
                precio
            }
        })

        if(created){
            const foundDietas = await Dieta.findAll({
                where:{
                    nombre:"" //esto se debe arreglar lo del nombre
                }
            })
            await receta.addDieta(foundDietas)
            return receta
        }
    }catch(e){
        return console.log(e)
    }
}

const updateReceta = async(req,res,next)=>{
    const id = req.params.id;
    const recetas = req.body
    return Receta.update(recetas,{
        where:{
            id,
        }
    })
    .then((updateReceta)=>{
        res.send(updateReceta)
    })
    .catch((error)=>next(error))
}

const deleteReceta = async(req,res)=>{
    const {id}= req.params;
    if(isNaN(id)){
        const deleteResponse = await Receta.destroy({
            where:{id:id}
        });
        getAllInfo()
        if(deleteResponse){
            return res.status(200).json("Receta Deleted SuccessFull")
        }else{
            return res.status(404).send("Receta Not Found")
        }
    }else{
        return res.status(404).send("Invalid id")
    }
}


//BEBIDAS DE AQUI PA ABAJO




// const getBebidasDbInfo = async()=>{
//     try{
//         const bebidaDb = await Bebida.findAll({
//             where:{
//                 attributes:["nombre"],
//             }
//         })

//         const bebidaMap = bebidaDb.map((bebida)=>{
//             return{
//                 id:bebida.dataValues.id,
//                 nombre:bebida.dataValues.nombre,
//                 imagen:bebida.dataValues.imagen,
//                 tamaño:bebida.dataValues.tamaño
//             }
//         })
//         return bebidaMap
//     }catch(e){
//         return console.log(e)
//     }
// }



// const BebidaToDb = async(data) => {
//     try {
//         const {nombre, imagen, tamaño} = data;
//         const [bebida, created] = await Bebida.findOrCreate({
//             where: {nombre},
//             defaults: {
//                 imagen,
//                 tamaño
//             }
//         });
//         if (created) {
//             return bebida;
//         }
//     } catch (e) {
//         return console.log(e);
//     }
// };


const getBebidasDbInfo = async()=>{
    try{
        const bebidaDb = await Bebida.findAll({})

        const bebidaMap = bebidaDb.map((bebida)=>{
            return{
                id:bebida.dataValues.id,
                nombre:bebida.dataValues.nombre,
                imagen:bebida.dataValues.imagen,
      
            }
        })
        return bebidaMap
    }catch(e){
        return console.log(e)
    }
}


const BebidaToDb = async(data) => {
    try {
        const {nombre, imagen} = data;
        const [bebida, created] = await Bebida.findOrCreate({
            where: {nombre},
            defaults: {
                imagen,
        
            }
        });
        if (!created) {
            return {error: "Bebida already exists"};
        }
        return bebida;
    } catch (e) {
        return {error: "An error occurred while trying to save the bebida to the database"};
    }
};


const deleteBebida = async(req,res)=>{
    const {id}= req.params;
    if(!Number.isInteger(Number(id))){
        return res.status(404).send("Invalid id")
    } else {
        const deleteBebidas = await Bebida.destroy({
            where:{id:id}
        });
        getBebidasDbInfo()
        if(deleteBebidas){
            return res.status(200).json("Bebida Deleted SuccessFull")
        }else{
            return res.status(404).send("Bebida Not Found")
        }
    }
}




module.exports={
    recetaToDb,
    getDbInfo,
    getAllInfo,
    updateReceta,
    deleteReceta,
    getBebidasDbInfo,
    BebidaToDb,
    deleteBebida
}