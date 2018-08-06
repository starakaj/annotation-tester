import express from "express"
const app = express();
import router from "./routes/router";

app.use(router);

const server = app.listen(3000, () => {
	const portStr = server.address();
	if (typeof portStr === "string") {
		console.log('Example app listening at port %s', portStr);
	} else {
		console.log('Example app listening at port %s', portStr.port);
	}
});

module.exports = server;
