function colorCombinator(color1, color2) {
    let combined;
    let colors = color1 + " "  + color2;

    if(colors.includes("red") && colors.includes("yellow"))
        combined = "orange";

    else if(colors.includes("red") && colors.includes("blue"))
        combined = "purple";

    else if(colors.includes("blue") && colors.includes("yellow"))
        combined = "green";

    else 
        return "Sorry, one of those colors is not a primary color!";

    return "When you combine " + color1 + " and " + color2 + ", you get " + combined + "!";
}

module.exports = colorCombinator;