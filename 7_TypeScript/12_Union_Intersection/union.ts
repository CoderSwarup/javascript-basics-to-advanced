// Union Operator is  ==> |
const Value = (value: number | string | boolean): void | number => {
  console.log(value);
};

Value(11);
Value("Sam"); //  here get error if the Union Oprator is  not use
Value(true);
