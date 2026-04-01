# Documents Classification
Exercise created with Typescript that allows you to omit words from a given text.

### Assumptions
- String of keywords and phrases should use just single or double quotes `""` `''`
- Only quoted text is treated as phrases
- Non-quoted text is treated as keywords

### Deployment
Run command `npm install && npm run dev`

## Exercise 3

### Requierments
1. Searchable by keywords:
    - Store extracted keywords in the database
    - Create an index on the keywords for fast lookups
2. How the data would be stored ?
    - Store metadata in database (keywords, documentUrl, ...)
    - Store classified document in S3
3. How to expose it to external consumers ?
    - Expose it through REST API

### System design
- Database MongoDB or DynamoDB
    - Fast lookups
    - Horizontal scalability
- S3
    - Stores classified documents
    - optimized for large text
- Access Control
    - Classified documents are public
    - Declassified content requires authentication, only authorized users are able to perform declassification process.