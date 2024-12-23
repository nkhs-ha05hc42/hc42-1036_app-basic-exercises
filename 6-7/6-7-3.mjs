const values = [1,2,1,2,3,3,4,3]
const valueSet = new Set(values)
const newvalues = []
for (const str of valueSet) {
    newvalues.push(str)
}
console.log(newvalues)