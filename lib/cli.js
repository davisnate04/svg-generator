const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Triangle, Circle, Square } = require("./shapes.js");

class CLI {
  constructor() {
    this.color = "";
    this.shape = [];
    this.shapeColor = "";
  }
  run() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Input the text for the SVG:",
        },
        {
          type: "input",
          name: "color",
          message: "Input a color for the text (keyword or hexadecimal):",
        },
        {
          type: "list",
          name: "shape",
          choices: [
            "Triangle",
            "Circle",
            "Square"
        ],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Input a color for the shape (keyword or hexadecimal):",
        },
      ])
      .then((response) => {
        switch (response.shape) {
          case "Triangle":
            const triangle = new Triangle(
              response.text,
              response.color,
              response.shapeColor
            );
            const svgTriangle = triangle.render();
            return writeFile("./dist/logo.svg", svgTriangle);
            case "Circle":
            const circle = new Circle(
              response.text,
              response.color,
              response.shapeColor
            );
            const svgCircle = circle.render();
            return writeFile("./dist/logo.svg", svgCircle);
            case "Square":
            const square = new Square(
              response.text,
              response.color,
              response.shapeColor
            );
            const svgSquare = square.render();
            return writeFile("./dist/logo.svg", svgSquare);
          default:
            throw new Error("Invalid shape");
        }
      });
  }
}

module.exports = CLI;
