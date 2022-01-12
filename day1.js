function numberLooking(array) {
    let howBig = 0;
for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]){
            ++howBig;
        }
        else if (array[i + 1] === undefined){
            ++howBig;
        }
}
    console.log(howBig);
}


getText("input.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
    const array = myText.split('\n');
    numberLooking(array);
}