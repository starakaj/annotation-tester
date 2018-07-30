const express = require('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const histo = require("../controllers/histo.js");

router.get("/", (req, res) => {
	res.send("Upload a max patch to /histo to get patch statistics");
});

router.post("/histo",  upload.single("patch"), (req, res) => {
	let asBuf = req.file.buffer;
	let asJSON = null;
	try {
		asJSON = JSON.parse(String(asBuf));
	} catch (e) {
		res.status(400);
		res.json({
			message: "Could not convert patch to JSON",
			detail: `${e}`
		});
	}

	if (asJSON !== null) {
		const boxCount = histo.count(asJSON);
		res.send(boxCount);
	}
});

module.exports = router;
