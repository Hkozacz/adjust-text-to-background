$(document).ready(function(){
    $(".adjust-text").each(function(){
        //extract R G and B from element background color
        let backgroundColor = $(this).css("background-color");
        backgroundColor =  backgroundColor.split(',')
        let R = parseInt(backgroundColor[0].split('(')[1])
        let G = parseInt(backgroundColor[1])
        let B = parseInt(backgroundColor[2].split(')')[0])

        //Convert RGB to HSL
        
        //The R,G,B values are divided by 255 to change the range from 0..255 to 0..1
        let rPrime = R/255
        let gPrime = G/255
        let bPrime = B/255
        //Then we extract max and min values
        let cMax = Math.max(rPrime, gPrime, bPrime)
        let cMin = Math.min(rPrime, gPrime, bPrime)
        /*
        HSL is Hue, saturation and lightness.
        We need only lightness to determine if the color is bright or dark.
        So we gonna calculate only the last value with formula: L = (Cmax + Cmin) / 2
        */
       let lightness = (cMax + cMin)/2
       /*
       Now we gonna check if our lightness is >50% or < 50%.
       If it is >50% we are goin to change text color to black
       otherwise, we gonna set text color to white.
       */
        lightness >= 0.50 ? $(this).css("color", "black") : $(this).css("color", "white");
    })
})