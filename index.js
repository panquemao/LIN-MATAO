const express = require("express");


const app = express();


app.get("/", async (req, res) => {

    res.send("Elena es fea");
})

app.listen(3000, "192.168.0.8", () => console.log("Server is running..."));