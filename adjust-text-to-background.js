$(document).ready(function(){
    $(".adjust-text").each((index, element) =>{
        //extract R G and B from element background color
        const backgroundColor = $(element)
            .css("background-color")
            .replace('rgb(', '')
            .replace(')', '')
            .split(',')
        const [R,G,B] = backgroundColor
        //Convert RGB to HSL

        //The R,G,B values are divided by 255 to change the range from 0..255 to 0..1
        const rPrime = R/255
        const gPrime = G/255
        const bPrime = B/255
        //Then we extract max and min values
        const cMax = Math.max(rPrime, gPrime, bPrime)
        const cMin = Math.min(rPrime, gPrime, bPrime)
        /*
        HSL is Hue, saturation and lightness.
        We need only lightness to determine if the color is bright or dark.
        So we gonna calculate only the last value with formula: L = (Cmax + Cmin) / 2
        */
        const lightness = (cMax + cMin)/2
        /*
        Now we gonna check if our lightness is >50% or < 50%.
        If it is >50% we are goin to change text color to black
        otherwise, we gonna set text color to white.
        */
        lightness >= 0.60 ?$(element).css("color", "black") : $(element).css("color", "white");
    })
})
