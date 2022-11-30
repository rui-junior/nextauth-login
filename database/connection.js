import mongoose from "mongoose"

export default async function connect(){

    await mongoose.connect('mongodb+srv://ruijr:Mustang1970%23@cluster0.zt73cv9.mongodb.net/?retryWrites=true&w=majority')
        .then(response => {
            console.log("Conectado ao MongoDB")
        })
        .catch((error) => {
            console.log(error)
        })

}