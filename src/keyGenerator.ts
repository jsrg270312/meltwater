export const encodeKey = (matches: Map <number, string> ): string=>{
    let key = Buffer
        .from(JSON.stringify([...matches]))
        .toString('base64');
    return key
}

export const decodeKey = (key: string): Map <number, string> =>{
    let decode =  JSON.parse( Buffer.from(key, 'base64').toString()) as [number, string][]
    let matches = new Map(decode);
    return matches
}