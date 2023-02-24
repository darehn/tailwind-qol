# tailwind-qol

Additional utility classes for tailwindcss

## Installation

yarn
```shell
yarn add @darehn/tailwind-qol
```

npm
```shell
npm install --save @darehn/tailwind-qol
```

## Usage

To install everything in this package, update the plugins array in `tailwind.config.js`.

```js
plugins: [
    ...Object.values(require('@darehn/tailwind-qol')),
]
```

You can also include only the parts you need. The following example would only include the animations plugin.

```js
plugins: [
    require('@darehn/tailwind-qol/animations'),
]
```

## Size Plugin

The size plugin adds new classes to set the with and height of an element. 
You can use the same units that you are used to.

### Usage

```js
plugins: [
    require('@darehn/tailwind-qol/size'),
]
```

### Example

Div with width and height set to 16 units (4rem)
```html
<div class="s-16"></div>
```

### Available Classes

`s-{n}`: Sets the width and height to the given size

----

## Animation Plugin

The animations plugin adds new utility classes for animations.
You can use this to alter the animation-duration and timing-function.

### Usage

```js
plugins: [
    require('@darehn/tailwind-qol/animations'),
]
```

### Example

Here we change the duration of the animation to 1.5 seconds.
We also set the timing-function to `steps(8)`.
```html
<svg class="animate-spin animation-duration-1500 animation-steps-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	...
</svg>
```

### Available Classes

`animation-duration-{n}`: Sets the duration of the animation in ms.

`animation-steps-{n}`: Sets the timing-function to steps(n).

`animation-linear`

`animation-ease`

`animation-ease-in`

`animation-ease-out`

`animation-ease-in-out`

`animation-bounce`

----

## Typography Plugin

The typography plugin adds the possibility to clamp the number of lines visible.

### Usage

```js
plugins: [
    require('@darehn/tailwind-qol/typography'),
]
```

### Example

Limits the number of visible lines to 2.

```html
<div class="clamp-lines-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium autem commodi
    delectus dolorem dolorum eos error illum iusto libero non optio pariatur perferendis, 
    quam, repellat sit sunt totam ut velit.
</div>
```

### Available Classes

`clamp-lines-{n}`: Clamp text to given number of lines

----

## Elevation Plugin

The elevation plugin adds material design style elevation utility classes.
You can still use the regular tailwind shadow classes to change the color of the shadow.

### Usage

```js
plugins: [
    require('@darehn/tailwind-qol/elevation'),
]
```

### Example

Div with an elevation level of 4.

```html
<div class="shadow-4">
    ...
</div>
```

### Available Classes

`shadow-{n}`: Sets the elevation level to the given value (between 0 and 24).