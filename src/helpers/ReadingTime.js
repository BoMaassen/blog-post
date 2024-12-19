function ReadingTime(words){
    const amountOfWords = words.split(" ");
    const time = Math.round(amountOfWords.length * 0.003)
    return time
}
export default ReadingTime