import { classification, declassify } from "./documentProcessor"
import { decodeKey, encodeKey } from "./keyGenerator"
import { extractSecrets } from "./sanitizedSecrets"
import { ClassifiedDocument } from "./types"

function performClassification(
    censoredWords: string,
    text: string
): ClassifiedDocument{
    let response = {
        textClasified: text,
        key: ''
    }
    if(censoredWords === '') return response
    let secrets = extractSecrets(censoredWords)

    let {textClasified, matches} = classification(secrets, text)

    let key = encodeKey(matches)

    response.textClasified = textClasified
    response.key = key
    return response;
}

function performDeclassification(key: string, textClasified: string): string{
    if(key === '') return textClasified
    let matches = decodeKey(key)
    let textDeclassify = declassify(matches, textClasified)
    return textDeclassify
}


let censoredWords = `Hello world "Boston Red Sox", 'Pepperoni Pizza', 'Cheese Pizza', beer`
let text = `Hello world beer Boston Red Sox, Some 'Pepperoni Pizza', "words" 'Cheese Pizza', beer.`

let {textClasified, key} = performClassification( censoredWords, text)
console.log(textClasified, key)

let textDeclassify = performDeclassification(key, textClasified)
console.log(textDeclassify)