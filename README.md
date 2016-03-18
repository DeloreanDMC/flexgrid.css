# flexgrid.css

_A responsive, declarative grid system powered by flexbox. Demo at [flexgrid.axiomzen.co](http://flexgrid.axiomzen.co)_

[![NPM](https://nodei.co/npm/flexgrid.css.png)](https://nodei.co/npm/flexgrid.css/)

[![Dependencies](https://david-dm.org/axiomzen/flexgrid.css.png)](https://david-dm.org/axiomzen/flexgrid.css.png)
<a href="https://zenhub.io"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png" height="18px"></a>

Flexgrid.css is a responsive, declarative grid system powered by flexbox. It allows you to generate finely tuned responsive layouts at a lightning pace. The declarative nature lets you determine what size a grid cell should be at a certain screen width.

## Installation

There are two ways to use flexgrid.css:

* Use it as an `npm` module by running the following command:

  ```
  npm install flexgrid.css --save
  ```

* Download the files directly:
  - Uncompressed - [flexgrid.css](https://raw.githubusercontent.com/axiomzen/flexgrid.css/master/dist/flexgrid.css)
  - Compressed - [flexgrid.min.css](https://raw.githubusercontent.com/axiomzen/flexgrid.css/master/dist/flexgrid.min.css)

## Usage

Grids can de used on generic HTML elements such as `div`, but resets are also in place to use them on `ul` and `ol`.

### Defaults

If you're using it out of the box, these are the default values that come shipped:

* columns: 12
* breakpoints:
  - `xs`: 320px
  - `sm`: 480px
  - `md`: 640px
  - `lg`: 760px
  - `xl`: 1020px
  - `xx`: 1200px
* gutters:
  - `xs`: 0.2rem
  - `sm`: 0.32rem
  - `md`: 0.52rem
  - `lg`: 0.84rem
  - `xl`: 1.36rem
  - `xx`: 2.2rem

These are all easily customisable if you build the file yourself.

### Basic Usage

In the most basic form, you can create a grid where all cells occupy an equal amount of space:

```html
<div class="Grid">
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
  ...
</div>
```

If you want cells to occupy the amount of space that their content takes up, then use the `--auto` modifier:

```html
<div class="Grid">
  <div class="Grid-cell--auto"></div>
  <div class="Grid-cell--auto"></div>
  <div class="Grid-cell--auto"></div>
  <div class="Grid-cell--auto"></div>
  ...
</div>
```

### Responsive, Declarative Usage

In order to declaratively build a responsive grid in which cells occupy a certain percentage of width at a certain screen size, you can chain together size modifiers for the cells. When using this approach, the bare requirement is to declare the cell size at the smallest screen size, i.e. `xs`. The other sizes are optional. Here are all screen size modifiers:

* `xs`
* `sm`
* `md`
* `lg`
* `xl`
* `xx`

The grid is based on a 12 column layout, so when thinking about your display for one row, think that the span number must add up to 12. Here's a basic example:

```html
<ul class="Grid">
  <li class="Grid-cell--xs-2"></li>
  <li class="Grid-cell--xs-8"></li>
  <li class="Grid-cell--xs-2"></li>
</ul>
```

This grid will display cells the same at any screen size, in a `2:8:2` ratio (compared to the number of columns, 12). Let's make these grid cells change at various breakpoints:

```html
<div class="Grid">
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
  <div class="Grid-cell--xs-4 Grid-cell--md-3 Grid-cell--lg-2"></div>
</div>
```

In the above example, the cells will be in a ratio of `4:4:4` per row, making 4 rows in total, by default and at the `xs` screen size. At the `md` screen size, they will occupy `3:3:3:3` per row, making 3 rows in total. Finally at the `lg` screen size, they will occupy `2:2:2:2:2:2` per row, making 2 rows in total. If you're afraid about cell rows not always adding up to the number 12, fear not. Extra cells just overflow to a new line.

### Adding Gutters

You can add gutters to the grid cells which will create an even, fixed horizontal and vertical spacing between cells, while collapsing the excess amounts. Gutter modifiers come in four sizes:

```html
<div class="Grid Grid--gutter-sm">...</div>
<div class="Grid Grid--gutter-md">...</div>
<div class="Grid Grid--gutter-lg">...</div>
<div class="Grid Grid--gutter-xl">...</div>
```

### Orientation and Spacing

To change the orientation to a columnar grid, add the following modifier:

```html
<div class="Grid Grid--column">...</div>
```

To change the alignment of grid cells with respect to the flex line, use the following modifiers:

```html
<!-- aligns to start of flex line -->
<div class="Grid Grid--alignStart">...</div>

<!-- aligns to end of flex line -->
<div class="Grid Grid--alignEnd">...</div>

<!-- aligns to center of flex line -->
<div class="Grid Grid--alignCenter">...</div>
```

To change the spatial distribution of grid cells along the main axis, use the following modifiers:

```html
<!-- packs cells to center of main axis -->
<div class="Grid Grid--justifyCenter">...</div>

<!-- packs cells to end of main axis -->
<div class="Grid Grid--justifyEnd">...</div>

<!-- distributes extra space evenly between cells -->
<div class="Grid Grid--spaceBetween">...</div>

<!-- distributes extra space evenly around cells -->
<div class="Grid Grid--spaceAround">...</div>
```

## Browser Support

This component has been tested in the following browsers:

| Browser | Version |
| ------- | ------- |
| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | Chrome 46.0+ |
| ![Firefox](https://raw.githubusercontent.com/callmenick/browser-logos/master/firefox/firefox_48x48.png) | Firefox 40.0+ |
| ![Safari](https://raw.githubusercontent.com/callmenick/browser-logos/master/safari/safari_48x48.png) | Safari 9.0+ |
| ![Opera](https://raw.githubusercontent.com/callmenick/browser-logos/master/opera/opera_48x48.png) | Opera 33.0+ |

## Contributing

Please check [CONTRIBUTING.md](CONTRIBUTING.md).

This project adheres to the [Open Code of Conduct](http://todogroup.org/opencodeofconduct/). By participating, you are expected to honor this code.

## Author

* [AxiomZen](https://www.axiomzen.co/)

## Collaborators

* [Nick Salloum](https://github.com/callmenick)

## License

[MIT](LICENSE)
