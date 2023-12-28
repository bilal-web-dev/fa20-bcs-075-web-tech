import mongoose from "mongoose";

const uri =
  "mongodb+srv://final:final@cluster2.zmakp02.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = () => {
  mongoose
    .connect(uri, {
      dbName: "final",
    })
    .then((c) => console.log("Database connected"))
    .catch((err) => {
      console.log(err);
    });
};
