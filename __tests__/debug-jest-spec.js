const { getList } = require("../something.js");

describe("aaa", () => {
  it("bbb", () => {
    const values = getList();
    const others = values.map((x) => x * 2);
  });
});

const values1 = getList();
const others1 = values1.map((x) => x * 2);
