
const permutate = (elements) => {
    if(elements.length === 0) return [[]];

    const firstElement = elements[0];
    const remainingElements = elements.slice(1);
    
    const permsWithoutFirstElement = permutate(remainingElements);

    const allPermutations = [];
    permsWithoutFirstElement.forEach(perm => {
        for(i = 0; i <= perm.length; i++){
            const aPerm = [...perm.slice(0, i), firstElement, ...perm.slice(i)];
            allPermutations.push(aPerm);
        }
    })

    return(allPermutations)
}

const combinate = (elements) => {
    if(elements.length === 0) return [[]];

    const firstElement = elements[0];
    const remainingElements = elements.slice(1);
    
    const combsWithoutFirstElement = combinate(remainingElements);
    const combinationsWithFirst = [];

    combsWithoutFirstElement.forEach(comb => {
        const aCombWithFirst = [...comb, firstElement];
        combinationsWithFirst.push(aCombWithFirst);
    })

    return([...combsWithoutFirstElement, ...combinationsWithFirst])
}

console.log(permutate(['a','b']))