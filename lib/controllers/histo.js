// @flow
const histo = require("histo");
import type { Patch } from "../types.js";

module.exports = {
	count: (patchJSON: Patch) => {
		const analysis = histo.countBoxes(patchJSON.patcher.boxes);
		return analysis;
	}
}
