# Soft UI color processing
A small javascript library for color processing. 

`color-processing-library` is available on [npm](http://npmjs.org). To install it, type:

    npm i color-processing-library
    
Functionality
Import example: 
```javascript
import * as colorProcessing from 'color-processing-library'  
```
Funcitons
`toHex(number)` - The function converts decimal number to hexadecimal value
>Example
```javascript
toHex(255) // returns 'FF' 
toHex(0) // returns '00'
```
`calculateColor(colorValue, factor)` - The function calculates a new color value in percent of the initial color
>Example
```javascript
calculateColor(225, 85) // returns 191
calculateColor(89, 120) // returns 107
```
`getFontColor(red, green, blue)` - The function calculates and returns either black or white hexadecimal color code depending on the color input
>Examples
```javascript
let red, green, blue = 240;
getFontColor(red, green, blue) // returns '#000'
```
```javascript
let red, green, blue = 30;
getFontColor(red, green, blue) // returns '#FFF'
```
`getFontColorHex(hexColor)` - The function calculates and returns either black or white hexadecimal color code depend on the color input | input - Hexadecimal color code
>Example
```javascript
getFontColorHex('#F0F0F0') // returns '#000'
getFontColorHex('#303030') // returns '#FFF'
```
`hexToRGB(hexColor)` - The function converts hexadecimal color code to rgb
>Example
```javascript
hexToRGB('#ED2939') // returns { Red:237, Green:41, Blue:57 }
hexToRGB() // returns "Invalid Hex code value"
```
`isHexColorValid(hexColor)` - The function validates hexadecimal color and returns either true or false
>Example
```javascript
isHexColorValid('#ED2939') // returns true
isHexColorValid('#Helloo') // returns false
```
`getTintsAndShades(red, green, blue, factor, outputMode)` - The function returns new color in % of input color as hex or rgb
>Example
```javascript
getTintsAndShades(255, 255, 255, 85, 'rgb') // returns 'rgb(217,217,217)'
getTintsAndShades(255, 255, 255, 85, 'hex') // returns '#D9D9D9'

```
`invertFontColor(hexColor)` - Function returns opposite color
> ❗️Note This function currently works only with black and white hex values 

>Example
```javascript
getTintsAndShades("#000") // returns '#FFF'
```
`getHarmonyColor(color, mode)` - Function returns a harmony color depend on a mode
> ❗️Note This function currently works only in complementary mode

>Example
```javascript
getHarmonyColor("#ED2939", 'complementary') // returns '#12D6C6'
```
