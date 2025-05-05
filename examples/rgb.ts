type RGB=[number,number,number];


const red:RGB=[255,0,0];

const green:RGB=[0,255,0];

const blue:RGB=[0,0,255];


function displayColor(color:RGB):string{
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}


console.log(displayColor(red));
