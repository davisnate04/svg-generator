class Shape {
  constructor(text, color, shapeColor) {
    const colorHexa = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");
    const colors = ["red", "green", "blue", "white", "black"];

    text = text.trim();
    color = color.trim();
    shapeColor = shapeColor.trim();

    // Check for the text length
    if (text.length > 3) {
      throw new Error(
        "Error has occured due the text being less to 3 characters"
      );
    } else {
      this.text = text;
    }

    // Checks if the color is from the list or if it is a hexadecimal
    if (colors.includes(color)) {
        this.color = color.toLowerCase();
    } else if (colorHexa.test(color)) {
        this.color = color;
    } else {
        throw new Error(
            `Error has occured due to invalid color: ${color}`
          );
    }

    if (colors.includes(shapeColor)) {
        this.shapeColor = shapeColor.toLowerCase();
    } else if (colorHexa.test(shapeColor)) {
        this.shapeColor = shapeColor;
    } else {
      throw new Error(`Error has occured due to invalid color: ${shapeColor}`);
    }
  }
}

// Inside each class the render returns the svg with the params inside each one
class Triangle extends Shape {
  constructor(text, color, shapeColor) {
    super(text, color, shapeColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon><text x="150" y="135" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
  }
}
class Circle extends Shape {
    constructor(text, color, shapeColor) {
      super(text, color, shapeColor);
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
    }
  }

class Square extends Shape {
    constructor(text, color, shapeColor) {
      super(text, color, shapeColor);
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" x="50" y="25" height="200" fill="${this.shapeColor}"></rect><text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
    }
}
  


module.exports = { Triangle, Circle, Square };
