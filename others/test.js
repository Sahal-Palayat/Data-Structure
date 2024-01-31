function lastSame(array,target){
  let j=array.length-1
  for (let i=0;i<array.length;i++){
    if(array[j]===target){
        j--;
    }

    if(array[i]===target){
        let swap=array[j]
        array[j]=array[i]
        array[i]=swap

        j--;
    }
    if (i==j){
        break
    }
  }
return array

}

let Numberss = [1, 2, 3, 5, 3, 4, 5, 6, 3, 5, 6, 3, 4, 3, 4, 2]
let modifiedArray = lastSame(Numberss, 4);

console.log(modifiedArray);











function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  return isPalindromeHelper(cleanStr);
}

function isPalindromeHelper(str) {
  if (str.length <= 1) {
      return true; 
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];

  if (firstChar !== lastChar) {
  }

  return isPalindromeHelper(str.substring(1, str.length - 1));
}

console.log(isPalindrome('malayalam'));
