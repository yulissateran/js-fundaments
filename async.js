/*Asincronismo */
console.log('a');
setTimeout(()=>console.log('b'),0);
console.log('c');
setTimeout(()=>console.log('d'),2000);
for (let index = 0; index < 10000; index++) {
   console.log(index,'')
    
}
