export type RemoveSecretsOutput = {
    textClasified: string,
    matches: Map< number, string >
}

export type ClassifiedDocument = {
    textClasified: string,
    key: string
}