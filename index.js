// Team

function josephus_survivor(nb, nbElemines) {
  const arr = Array.apply(null, { length: nb + 1 })
    .map(Number.call, Number)
    .slice(1);
  let nombre = 0;
  let moinsUn = 1;
  let jambon = 0;

  function recursive(nombre) {
    if (arr.length > 1) {
      nombre += nbElemines -= moinsUn;
      console.log(nombre);
      jambon = jambon + nbElemines - moinsUn;
      console.log(jambon);
      nombre = nombre % arr.length;
      jambon = jambon % arr.length;

      arr.splice(nombre, 1);
      moinsUn = 0;
      recursive(nombre);
    }
    return arr;
  }
  console.log(recursive(nombre));
}

// Julien
function josephus_survivor(nbOfSoldiers, orderToDie, surviror = 0) {
  return nbOfSoldiers > 0
    ? (surviror =
        (josephus_survivor(nbOfSoldiers - 1, orderToDie, surviror) +
          orderToDie -
          1) %
          nbOfSoldiers +
        1)
    : surviror;
}

console.log(josephus_survivor(7, 3));
