const express = require("express");
const app = express();
const router = require("./routes/router.js");

app.use(router);

app.listen(3000, () => console.log('Listening for Max patches on port 3000!'));