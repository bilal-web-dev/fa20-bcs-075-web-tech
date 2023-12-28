import cookieParser from "cookie-parser";
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { errorMiddleWare } from "./middlewares/error.js";
import taskRouter from "./routes/task.js";
import { Task } from "./models/task.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

//* setting up view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "./public")));

//* Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//*Routes
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello welcome to the API",
  });
});

app.get("/home", async (req, res) => {

  const allTasks = await Task.find({});

  res.render("home", {
    tasks:allTasks
  });
});

//* Using error Middleware
app.use(errorMiddleWare);
