import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//import db
import db from "./db/index.js";

//import routes
import authRouter from "./routes/authenticate.js";

//setup app
const app = express();
app.use(bodyParser.json())
app.use(cors());

//setup env variables
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.use("/api", authRouter(db));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});