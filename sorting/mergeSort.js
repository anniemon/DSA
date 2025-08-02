let sorted = [];
function mergeSort(arr, left, right) {
	if (left < right) {
		let mid = parseInt((left + right) / 2 );
		mergeSort(arr, left, mid);
		mergeSort(arr, mid + 1, right);
		merge(arr, left, mid, right);
	}
}

function merge(arr, left, mid, right) {
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
