const Calc = require("./index");

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1).res()).toEqual(2);
  });

  test("should be able to substract 5 - 6", () => {
    expect(new Calc(5).sub(6).res()).toEqual(-1);
  });

  test("should be able to multiply 2 * 5", () => {
    expect(new Calc(2).mult(5).res()).toEqual(10);
  });

  test("should be able to divide 15 * 4", () => {
    expect(new Calc(15).div(4).res()).toEqual(3.75);
  });

  test("should be able to add multiple numbers", () => {
    expect(
      new Calc(1)
        .add(1)
        .add(5)
        .res()
    ).toEqual(7);
  });

  test("should be able to do multiple thinks", () => {
    expect(
      new Calc(5)
        .add(6)
        .sub(1)
        .mult(10)
        .div(2)
        .res()
    ).toEqual(50);
  });

  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed");
  });

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    );
  });

  test("Dont accept boolean", () => {
    expect(() => new Calc(100).add(true)).toThrow("No boolean allowed");
  });
});
