var arr = [4,7,5,6,9,8,33,66,99]
var find = 7
var isFound = false
for( var i=0;i<arr.length;i++){
    if(arr[i]==find){
        console.log('Data found at index '+i)
        isFound = true
        break;
    }
   
}
if(!isFound){
    console.log('Data is not found')
}