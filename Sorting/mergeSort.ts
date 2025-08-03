let sorted:number[] = [];
function mergeSort(arr: Array<number>, left:number, right:number) {
	if (left < right) {
		let mid = Math.floor((left + right) / 2);
		mergeSort(arr, left, mid);
		mergeSort(arr, mid + 1, right);
		merge(arr, left, mid, right);
	}
}

function merge(arr:Array<number>, left:number, mid:number, right:number) {
	let i = left;
	let j = mid + 1;
	let k = left;
	while(i <= mid && j <= right) {
		if(arr[i] > arr[j]) {
			sorted[k++] = arr[j++];
		} else {
			sorted[k++] = arr[i++];
		}
	}
	if(i > mid) {
		while(j <= right) {
			sorted[k++] = arr[j++];
		}
	}
	if(j > right) {
		while(i <= mid) {
			sorted[k++] = arr[i++];
		}
	}
	for(let x = left; x <= right; x++) {
		arr[x] = sorted[x];
	}
}

/**
 * Usage
 * const arr = [1, 5, 3, 3, 4, 8, 6, 9, 2];
 * mergeSort(arr, 0, arr.length - 1);
 * console.log(arr);
 */
