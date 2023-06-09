function sortArrayBy2Criteria(array) {
    let sortedArray = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b);
        }
    })
    return sortedArray.join("\n")
}
