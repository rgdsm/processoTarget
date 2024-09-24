function countLetter (text) {
    const count = (text.match(/a/gi) || []).length;
    if(count > 0) {
        console.log(`A letra "A" aparece ${count} vezes.`)
    } else {
        console.log(`A letra "A" não aparece.`)
    }
}

countLetter("Cada dia aprendendo mais")
countLetter("Esse é o futebol")