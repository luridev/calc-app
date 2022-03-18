# calc-app

Simple calculator on **Vue** + **Vite**

### Live in GitHub Pages 
https://luridev.github.io/calc-app/

### Tests with Vitest
`npm run test`

### Grid template areas for layout

```
grid-template-areas:
    "display    display    display      display        display"
    "clearAll   power      sqrt         backspace      backspace"
    "memorySave memoryRead memoryClear  memoryIncrease memoryDecrease"
    "number7    number8    number9      multiplication division"
    "number4    number5    number6      subtraction    sign"
    "number1    number2    number3      addition       calculate"
    "number0    number0    separator    addition       calculate";
```

### Change layout on change orientation
![calc-orientation](https://user-images.githubusercontent.com/89837623/159049675-2222f68e-f0f6-4ff1-a859-f689a490888c.png)

