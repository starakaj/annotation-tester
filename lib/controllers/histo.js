const histo = require("histo");

module.exports = {
	count: (patchJSON) => {
		const analysis = histo.countBoxes(patchJSON.patcher.boxes);
		return analysis;
	}
}
