# ts-bug-example-2
Example Repo to replicate Typescript loader bug https://github.com/TypeStrong/ts-loader/issues/278

## To Run

1. Clone repo
2. ```npm install```
3. ``` webpack ```

* At this point the error occurs *

```
ERROR in ./~/ts-bug-example-1/src/index.ts
Module build failed: Error: Typescript emitted no output for /Volumes/SourceCode/ts-bug-example-2/node_modules/ts-bug-example-1/src/index.ts
    at Object.loader (/Volumes/SourceCode/ts-bug-example-2/node_modules/ts-loader/index.js:458:15)
 @ ./src/index.ts 2:25-52
```

If you also clone https://github.com/skysteve/ts-bug-example-1 and npm link the 2 and re-run webpack, the script builds correctly and you can run ```node bundle.js ``` and get the string "2 + 3 = 5" printed in the console
