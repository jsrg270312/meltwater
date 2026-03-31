

export const extractSecrets = (censoredWords: string): Set<string> =>{
    censoredWords.trim()

    let phrases = matchPhrases(censoredWords)
    censoredWords = removeSecretsFound(phrases, censoredWords)
    let keywords = matchKeywords(censoredWords)
    
    let secrets = new Set<string>(phrases.concat(keywords));
    return secrets
}

let matchPhrases = (censoredWords: string): string[] => {
    let phrases = censoredWords.match(/(['"])(.*?)\1/g)
    if (phrases){
        return phrases.map( phrase => phrase.replace(/["']/g, ''))
    }
    return []
}

const matchKeywords = (censoredWords: string): string[] => {
    return censoredWords.match(/\p{L}+/gu) || []
}

const removeSecretsFound = ( secrets: string[], censoredWords: string): string  => {
    secrets.forEach( secret => { 
        censoredWords = censoredWords.replaceAll(secret, '') 
    } )
    return censoredWords
}