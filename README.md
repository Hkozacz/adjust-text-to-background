# Adjust-Text-To-Background.js

It's a jQuery plugin for adjusting text color to your background color. If the background color is brighter script will change text color to black, if the background is darker it will be changed for white.
## Installation

Add jQuery to your html, and then add the plugin file

```bash
<script src="adjust-text-to-background.js"></script>
```
or use minified version

```bash
<script src="adjust-text-to-background.min.js"></script>
```

## Usage
Give your div or other element a class or id
```html
<div class="adjust-text" style="background: red; text-align: center;">
    <h1>Example text</h1>
</div>
```
Then create script after the plugin files and point to choosen element/elements by
id or class like in example:
```html
<script>
    $('.adjust-text').adjustTextToBackground({
            lightness: 0.6
        });
</script>
```
The only option `adjustTextToBackground` takes is lightness.
The value of that const determinates from which value the text will be adjusting.
The formula is:
```text
If Background lightness is greater or equal option lightness text will be black
otherwise text will be white
```
for example `lightness: 0.6`
```javascript
if background lightness >= 0.6 then text will be white else text will be black
```
