import { extractSecrets } from "./sanitizedSecrets"
function performClasification(
    censoredWords: string,
    text: string
): string{
    if(censoredWords === '') return text
    let secrets = extractSecrets(censoredWords)
    for(let secret of secrets){
        text = text.replaceAll(secret, 'XXXX')
    }
    return text;
}

let censoredWords = `Hello world "Boston Red Sox", 'Pepperoni Pizza', 'Cheese Pizza', beer`
let text = `Hello world Boston Red Sox, Some 'Pepperoni Pizza', "words" 'Cheese Pizza', beer.`
let documentClasified = performClasification( censoredWords, text)
console.log(documentClasified)