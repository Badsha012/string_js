   



   const sen='I am a student';
   let rev=' ';
   for(let i=0;i<sen.length;i++){
    // console.log(i);
    // console.log( sen[i]);
    const letter=sen[i];
    rev=letter + rev;



   }
console.log(rev);
// shortcut


const reversed=sen.split('').reverse().join('');
console.log(reversed);