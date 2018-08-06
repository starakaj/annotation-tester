const express = require("express");
const app = express();
const router = require("./routes/router.js");

app.use(router);

const server = app.listen(3000, () => {
	const port = server.address().port;
	console.log('Example app listening at port %s', port);
});

module.exports = server;
