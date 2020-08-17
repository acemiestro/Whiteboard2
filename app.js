const express = require("express");
const app = expres();

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server is listening at port 3000");
})