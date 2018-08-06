import express from "express"
const app = express();
import router from "./routes/router";

app.use(router);

const server = app.listen(3000, () => {
	const port = server.address().port;
	console.log('Example app listening at port %s', port);
});

module.exports = server;
