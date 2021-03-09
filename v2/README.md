# How to add VueJS to existing project

```
npm install vue-cli --save-dev
vue add .
```

In my case I choose: Babel, LESS compiler for CSS

I add vue.config.js with configuration which prevents creation of the html
I remove generated folders: components / assets - _but they still might be used!_

To build vue files: 

```
npm run build public/src/cart/main.js
```

For large scale application it will require more customization to treverse folders 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run build --watch
```

### Compiles and minifies for production
```
npm run build
```

