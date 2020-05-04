let  testPrctice = ['ANI', 'MOON', 'SOUMI'];

testPrctice.push ('Alpana');

console.log (testPrctice[3]);

console.log(testPrctice.length); 

console.log(testPrctice);

testPrctice[0]='Ansuman';
testPrctice.pop();


//let test1 = [...testPrctice];
test1 = testPrctice.map((element)=> {

    return element;
}

)

test1.push ('99');
console.log (test1);
console.log(testPrctice);