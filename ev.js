'use strict';

let counter = 0;

// setInterval(function()
// {
//   console.log(`Called ${++counter} times`);
//   if(counter < 7)
//   {
//
//   }else{
//     clearInterval;
//   }
// }, 3000)

process.stdin.on('data', function(d)
{
  console.log(d.toString().toUpperCase())
})
