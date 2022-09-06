# VoicePUT.js
 VoicePUT.js is a Simple Add-ON that adds Direct Speech to Text Funtionality for HTML Input's.
## CDN
### Standard
```bash
https://cdn.jsdelivr.net/gh/MusaBukhari237/VoicePUT.js@main/VoicePUT_All.js
```
### HTML
```html
<script src="https://cdn.jsdelivr.net/gh/MusaBukhari237/VoicePUT.js@main/VoicePUT_All.js"></script>
```
## Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>VoicePUT.js</title>
</head>
<body>
    <h3>Your Name</h3>
    <input type="text" placeholder="Press Sift + ~ to Run it using Keyboard" style="width:90%;">

    <script src="https://cdn.jsdelivr.net/gh/MusaBukhari237/VoicePUT.js@main/VoicePUT_All.js"></script>
</body>
</html>
```

## Input Types
1. By Default VoicePUT.js will be Activated when any input got focused but you can change by declaring variable as ``InputType`` like this,
```js
<script>
var InputType = 'input[type=search]'
</script>
and this will enable the VoicePUT.js on all input's which types is search.
```
---
Guys This is my first JS library so if you think there is something missing then let me know,
