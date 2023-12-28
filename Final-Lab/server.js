import { app } from "./app.js";
import { connectDB } from "./database/database.js";


//*Connecting to Database
connectDB();


//* Starting Server
app.listen(5000, ()=>{
    console.log("App is running at localhost:5000")
})