const port = 3000;

const express = require("express");
const app = express();
const cors = require("cors");

const toruga = require("./services/toruga");

app.use(cors());
app.use(express.json());

app.use("/toruga", toruga);

app.listen(port, () => console.log(`Server running on port: "${port}"`));
