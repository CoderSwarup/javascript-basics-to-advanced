// any ==> Working as Dynamic Data Type

let AnyType: any = "HI";
AnyType = true;
AnyType = 232323;

// Above all is valid

// unknown
//   this type is sader alternative to any because it still enforces type checking and type sefty

// let unKOWN = 4354;
// error
// unKOWN.map(() => {});

let UNKONOW: unknown = 3434;
UNKONOW = true;
UNKONOW = "HELLO";
UNKONOW = 3545;

if (typeof UNKONOW === "number") {
  console.log("IS NUMBER ");
}
