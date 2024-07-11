function showMessage(message: string) {
  console.log(message);
}
showMessage("string");

function calc(num1: number, num2: number) {
  return num1 + num2;
}
calc(2, 2);

function customError() {
  throw new Error("Error");
}

let error: unknown = customError();
console.log(error);
