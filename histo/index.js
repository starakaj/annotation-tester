// @flow

import type { Box } from "../types"

module.exports = {
	countBoxes: (boxList: [{box: Box}]) => {
		const boxCount = {};
		boxList.forEach((box) => {
			let maxclass = box.box.maxclass;
			if (maxclass === "newobj") {
				maxclass = box.box.text.split(" ")[0];
			}
			boxCount[maxclass] = boxCount[maxclass] ? boxCount[maxclass] + 1 : 1;
		});
		return boxCount;
	}
}
