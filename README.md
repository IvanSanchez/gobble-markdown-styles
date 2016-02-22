# gobble-markdown

Transform MarkDown files to HTML in your GobbleJS workflow

## Installation

I assume you already know the basics of [Gobble](https://github.com/gobblejs/gobble).

```bash
npm i -D gobble-markdown-styles
```

## Usage

In your `gobblefile`, run the `markdown-styles` gobble transform, like so:

```javascript
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'markdown-styles', {
	layout: 'github'
});
```

That transform will create a `.html` file for every `.md` file.

Note that the transform needs a `layout` option to specify the layout and style
to use. The layout can be a string specifying a built-in layout, or a path
to a layout directory. See the [`markdown-styles` documentation](https://github.com/mixu/markdown-styles)
for details.

## License

```
"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
```
