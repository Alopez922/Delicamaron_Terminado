const {recetaToDb,getAllInfo}=require("./services")

const getRecetas = async(req,res)=>{
    try{
        const name = req.query.name
        let recetaTotal = await getAllInfo()
        if(name){
            let recetaNombre = await recetaTotal.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()))
            recetaNombre.length?
            res.status(200).send(recetaNombre):res.status(404).send("No existe la receta")
        }else{
            res.status(200).send(recetaTotal)
        }
    }catch(e){
        return console.log(e)
    }
}

const postReceta = async(req,res)=>{
    try{
        const foundOrCreated = await recetaToDb(req.body)
        if(!foundOrCreated){
            return res.status(400).send({message:"Receta already exists"})
        }
        return res.status(201).send({message:"Receta created"})
        
    }catch(e){
        return console.log(e)
    }
}

module.exports={postReceta,getRecetas}