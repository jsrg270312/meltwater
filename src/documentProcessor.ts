import { RemoveSecretsOutput } from "./types"

export const classification = ( secrets: Set<string>, text: string): RemoveSecretsOutput =>{
    let pattern = [...secrets.values()].join('|')
    let regexpGral = new RegExp( pattern, 'gi')

    let matches = new Map< number, string >()
    let counter = 0

    const keyGenerator = (match: string): string =>{
        counter++
        matches.set(counter, match)
        return "xxxx-"+ counter
    }

    let textClasified = text.replace(regexpGral, keyGenerator)

    return {textClasified, matches}
}

export const declassify = (matches: Map <number, string>, text: string): string =>{
    const textGenerator = (match: string, digit: string): string => {
        return matches.get(Number(digit)) || '';
    }
    let textDeclassify= text.replace(/xxxx-(\d+)/g, textGenerator);
    return textDeclassify
}
