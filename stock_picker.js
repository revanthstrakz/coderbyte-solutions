function ArrayChallenge(arr) { 
var greatest = 0;
  for(var i = 0; i < arr.length; i++){
    for(var x = i+1; x <arr.length; x++)
      if(arr[x]-arr[i] > greatest){
          greatest = arr[x]-arr[i];
      }
  }
  return greatest;
}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));
