class MathOperations {
  public static PI = Math.PI;

  // static mehtods
  public static add(a: number, b: number): number {
    return a + b;
  }
}

// We cann access the static Data Memeber and member functions using without creating the Instace of a class

console.log(MathOperations.PI);
console.log(MathOperations.add(13, 3));
