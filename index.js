class Calc {
  constructor(num) {
    this.num = num;
  }

  add(numToAdd) {
    this.throwOnBadDatatype(numToAdd);
    this.num += numToAdd;
    return this;
  }

  sub(numToSub) {
    this.throwOnBadDatatype(numToSub);
    this.num -= numToSub;
    return this;
  }

  mult(numToMult) {
    this.throwOnBadDatatype(numToMult);
    this.num *= numToMult;
    return this;
  }

  res() {
    return this.num;
  }

  div(numToDiv) {
    this.throwOnBadDatatype(numToDiv);
    this.num /= numToDiv;
    return this;
  }

  throwOnBadDatatype(num) {
    if (typeof num === "string") {
      throw new Error("No strings allowed");
    }

    if (typeof num === "object") {
      throw new Error("No object allowed");
    }

    if (typeof num === "boolean") {
      throw new Error("No boolean allowed");
    }
  }
}

module.exports = Calc;
