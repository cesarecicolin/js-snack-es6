const squadre = 
[
    {
        name: "milan",
        point: 0,
        foul: 0
    },
    {
        name: "juventus",
        point: 0,
        foul: 0
    },
    {
        name: "inter",
        point: 0,
        foul: 0
    },
]
console.log(squadre);

const [milan, juventus, inter] = squadre



squadre.forEach(squadre => {
    squadre.point = randomPoint();
    squadre.foul = randomPoint();
  });

  let nameAndFoul = squadre.map(squadre => [squadre.name, squadre.foul])
  console.log(nameAndFoul);

// \*******************
// funzioni
function randomPoint() {
    const random = Math.floor(Math.random() * 100) + 1;
    return random
}
