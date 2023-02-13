const {BebidaToDb,getBebidasDbInfo}= require("./services")

const getBebidas = async(req,res)=>{
    try{
        const name = req.query.name
        let bebidaTotal = await getBebidasDbInfo()
        if(name){
            let bebidaNombre = await bebidaTotal.filter(el=>el.name.toLowerCase().includes(name.toLowerCase()))
            bebidaNombre.length?
            res.status(200).send(bebidaNombre):res.status(404).send("No existe la bebida")
        }else{
            res.status(200).send(bebidaTotal)
        }
    }catch(e){
        return console.log(e)
    }
}


// const postBebida = async(req,res)=>{
//     try{
//         const bebidaOrCreated = await BebidaToDb(req.body)
//         if(!bebidaOrCreated){
//             return res.status(400).send({message:"Bebida already exists"})
//         }
//         return res.status(201).send({message:"Bebida Created"})
//     }catch(e){
//         return console.log(e)
//     }
// }

const postBebida = async(req,res)=>{
    try{
        const { nombre, imagen } = req.body;

        if (!nombre || !imagen ) {
            return res.status(400).send({ message: "Bad Request: Missing required parameters" });
        }

        const bebidaOrCreated = await BebidaToDb({ nombre, imagen });
        if (!bebidaOrCreated) {
            return res.status(400).send({ message: "Bebida already exists" });
        }
        return res.status(201).send({ message: "Bebida Created", bebidaOrCreated });
    } catch(e) {
        return res.status(500).send({ message: "Internal Server Error", error: e });
    }
};

module.exports={postBebida, getBebidas}