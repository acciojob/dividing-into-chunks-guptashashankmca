const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let result = [];
	let currentSubArray = [];
	let currentSum = 0;
	for(let i=0;i<=arr.length-1;i++){
		if(currentSubArray + arr[i] <=n){
			currentSubArray.push[arr[i]];
			currentSum = currentSum + arr[i];
		}
		else{
			result.push(currentSubArray);
			currentSubArray = arr[i];
			currentSum = arr[i];
		}
	}
	if(currentSubArray.length-1 > 0){
		result.push(currentSubArray);
	}
		return result;
};
// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));