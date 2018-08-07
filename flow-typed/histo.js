
declare type Box = {
	maxclass: string,
	text: string
}

declare module "histo" {	
	declare export function countBoxes(boxes: [{box: Box}]): {[key: string]: number}
}