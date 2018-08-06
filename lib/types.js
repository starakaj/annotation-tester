// @flow
export type Patch = {
	patcher: {
		boxes: [{box: Box}]
	}
}

export type Box = {
	maxclass: string,
	text: string
}
