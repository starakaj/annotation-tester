import { Box, countBoxes } from "histo";

export type Patch = {
	patcher: {
		boxes: [{box: Box}]
	}
}

export const count = (patchJSON: Patch) => {
	const analysis = countBoxes(patchJSON.patcher.boxes);
	return analysis;
}