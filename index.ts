let userName: string = 'Carlos Espinosa';
let hasLoggin: boolean = true;

const names: string[] = userName.split(' ')
const numbers: number[] = [10, 20]
const arrayNumbers: Array<number> = [1.2, 2.5]

interface Person {
  first: string
  last: string
}

const myName: Person = {
  first: 'Carlos',
  last: 'Espinosa'
}

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}

ids[30] = "c"

if (ids[30] === "c") {
  console.log("entro")
}

const mapNumer: number[] = [1,2,3].map((item) => item * 10)

console.log(names)
console.log(numbers)
console.log(arrayNumbers)
console.log(myName)
console.log(ids)
console.log(mapNumer)

