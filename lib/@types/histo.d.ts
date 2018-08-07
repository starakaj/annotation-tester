declare module "histo" {
	export type Box = {
		maxclass: string,
		text: string
	}

	export function countBoxes(boxes: [{box: Box}]): {[key: string]: number}
}
