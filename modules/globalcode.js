let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(pets)
//Removing Vinny
var removedItem = pets.splice(5, 1)
console.log(pets)

//Removing Marty
removedItem = pets.splice(3,1)
console.log(pets)
//Adding Nancy
var newLength = pets.unshift('Nancy')
console.log(pets)

//Adding my name
newLength = pets.push('Jim')
console.log(pets)

//Index of Riley
console.log(pets.indexOf('Riley'))

//Index of Cindy
console.log(pets.indexOf('Cindy'))
console.log(pets)

//Marmaduke
var withMarmaduke = pets + ',Marmaduke'
console.log(withMarmaduke)

//Removing with shift and showing removed item
var first = pets.shift()
console.log(first)
console.log(pets)

//Adding Barney
newLength = pets.unshift('Barney')
console.log(pets)

//combining arrays
newPets = ['Ted','Fred','Jed','Ned','Ed','Zed']
allPets = pets.concat(newPets)
console.log(allPets)

//shift removal
first = allPets.shift()
console.log(first)
console.log(allPets)

//Already used pets for the array, variable is called stringPets
let stringPets = allPets.join()
console.log(stringPets)

//Adding Agnes
newLength = allPets.unshift('Agnes')
console.log(allPets)