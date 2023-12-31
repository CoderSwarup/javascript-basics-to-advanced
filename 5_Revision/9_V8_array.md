## "Packed Vs Holey , JSVU"

### jsuv

> > Github Repo ==> https://github.com/GoogleChromeLabs/jsvu

### install

> > npm i -g jsvu ==> its Install Globally

### How to run jsvu

```bash
/.jsvu/bin/v8-debug --allow-natives-syntax

# Here You Give the REPL
# Sample Code

const arr =[]
%DevubPrint(arr)
```

## About Array in JS

1. **Holey** : An array is considered holey if it contains one or more undefined values, followed by one or more non

2.**PACKED (continuous)**:
A packed array is an array where all of the elements are stored consecutively, without any holes or gaps between them

## Array Optimization IN JS

1. **SMI (small Interger)**
   SMI is a 32 bit integer that can hold values from `-` `0x1fffff` to `0x1ffffff`. It's used for indexing arrays and other small integers. SMI are faster than other types because they take up less memory, so JavaScript engine tries to use them whenever possible.
   -- Best Type of Array

2. **Packed Element**:
   If all elements of an array are Smis or Holes then it becomes Packed Elements.

- A packed element array has one more field compared to a holey element array.
- The extra field contains the length of the last continuous sequence of Smis.
- If there is no such sequence, the value of this field is `0xFFFFFFF`, which means that every element is either a Smi or a Hole.
  **Example** : [1,2,3,,5] => `[1,2,3,,5,___,____]` => `[1,2,3,,5,6,7]` => `[1,2,3,,5,6,7,\_\_]` => `[1,2,3,,5,6,7,\_\_,___]`
  Here we have only one continuous sequence of smi numbers hence it sbecome packed.

3. **Double (float , string , function)**
   Double is used when there is at least one non-smi number in the array.

**Examples**:

```js
// Packed SMI Elements
let arr = [1, 2, 3]; // All are Smis

arr.push(8.7);
console.log(arr); // [1, 2, 3, 8.7] => It become double because of Non-Smi
// Smi : Only integer and negative integers can be stored as Smis

arr.push("str"); // Now Array Becomes Packed element

arr[11] = 102; // Now its Become HOLY Element

//-----------------------

//Holes Element
let arr = [1, , 3]; // Hole means undefined
```

## How Array Find Any Index Value

1. **Bound Check**:

- This is done by `v & 0xFFF` where v is the index value passed.
- Bound check returns the bucket number for that particular index.

2. **hasOwnProperty(arr,11)**:

- This method will return true if property exists otherwise false.

3. **hasOwnProperty(arr.prototype,11)**:

- This method checks whether this property exist on prototype chain or not.

4. **hasOwnProperty(arr,11)**:

- Again it calls hasOwnProperty() method but with next level prototype i.e., `Object.getPrototypeOf(arr)`.

## OPTIMIZATION SEQUENCE

1. **SMI**
   SMI > DOUBLE > PACKED(continuous)

2. **HOLY**
   H_SMI > H_DOUBLE > H_PACKED(discontinous)

## OPTIMIZATION EXAPLE

```js
const arr = new Array(3);
arr[0] = "Hello"; // HOLY_ELEMENTS
arr[1] = "World"; // HOLY_ELEMENTS
arr[2] = "JS"; // HOLY_ELEMENTS

// Optimize Version

const oarr = [];
oarr.push("Hello"); // PACKED_ELEMENTS
oarr.push("World"); // PACKED_ELEMENTS
oarr.push("JS"); // PACKED_ELEMENTS
```
