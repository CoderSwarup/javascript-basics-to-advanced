## Type Script Hot Realoadig ==> Where if i change in this File It Automatically Reflect On the .js File

## Command => tsc fileName.ts --watch

## What if required This For all Files

## So Their Is Command

```bash
tsc --watch OR -w
```

# Ts Project Setup

If We Required That The Typescript File In Single Folder And Respective Js File Different Folder How I can DO it

```plaintext

> GoTo tsconfig.json

++++++++++ STEP 1 ++++++++

> 29 "rootDir": "./" /* Specify the root folder within your source files. */,


// Change this With Your Folder Name


> "rootDir": "./src" ,

++++++++++ STEP 2 ++++++++


> 58     "outDir": "./" /* Specify an output folder for all emitted files. */,

// Change this With Your Folder Name


> "outDir": "./JS" ,


```
