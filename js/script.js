const biciclete = 
[
{
    name:"bici rossa",
    weight:"25"
},
{
    name:"bici blu",
    weight:"20"
},
{
    name:"bici verde",
    weight:"15"
},
]
const [bicycleRed, bicycleBlu, bicycleGreen] = biciclete

const lightBicycle = document.getElementById("bicyle")
console.log(lightBicycle);
const message = 
`
        <h2>${bicycleGreen.name}</h2>
        <h3>kg ${bicycleGreen.weight}</h3>
`
document.getElementById("bicyle") .innerHTML = message