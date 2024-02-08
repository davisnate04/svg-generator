const { Triangle } = require("./shapes.js");

describe("Triangle", () => {
  describe("color", () => {
    it("should accept this color", () => {
      const shape = new Triangle("SVG", "#474A51", "#414e63");

      expect(shape.render())
        .toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="#414e63"></polygon><text x="150" y="135" font-size="45" text-anchor="middle" fill="#474A51">SVG</text></svg>');
    });
  });
});
