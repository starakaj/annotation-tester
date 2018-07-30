const histo = require("../histo/index.js");

module.exports = {
	count: (patchJSON) => {
		const analysis = histo.countBoxes(patchJSON.patcher.boxes);
		return analysis;
	}
}
