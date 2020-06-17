const colorCombinator = require("./color-combinator");

function colorDeconstructor(color) {
    let color1 = "";
    let color2 = "";

    if(color === "orange") {
        color1 = "red";
        color2 = "yellow";
    }

    else if(color === "purple") {
        color1 = "red";
        color2 = "blue";
    }

    else if(color === "green") {
        color1 = "blue";
        color2 = "yellow";
    }

    else {
        return "Sorry, that's not a secondary color!";
    }

    return color.charAt(0).toUpperCase() + color.slice(1) + 
    " is made by combining " + color1 + " and " + color2 + "!";
}

module.exports = colorDeconstructor;