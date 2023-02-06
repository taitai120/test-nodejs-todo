const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const todoRoutes = require("./routes/todoRoutes")
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use("/api/v1/todos", todoRoutes);

mongoose.connect(process.env.DB, {}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is online on port ${process.env.PORT}`)
    })
}).catch(error => {
    console.log(error)
})
