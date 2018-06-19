# Naïveact

An extremely naïve and oversimplified copy of React made from scratch in 42 lines of code for learning purposes.

You can find an example counter app [here](https://nmarcora.github.io/naiveact/).

## How to use

No transpilation or build step needed, just use the following tag:

```html
<script defer src="https://s3.eu-west-2.amazonaws.com/nmarcora/naiveact.js"></script>
```

Alternatively, just download `naiveact.js` and include it in your `<head>` tag like so:

```html
<script defer src="path/to/naiveact.html"></script>
```

## Creating your first component

```js
// Example of a counter component that can be increased and decreased
class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this.up = () => this.setState({ counter: this.state.counter + 1 })
    this.down = () => this.setState({ counter: this.state.counter - 1 })
  }

  render () {
    return new Element(
      'div',
      null,
      {},
      new Element('h1', `${this.state.counter}`),
      new Element('button', '+', { onclick: this.up }),
      new Element('button', '-', { onclick: this.down })
    )
  }
}

// create an instance of the Counter component
// that you can render and inspect in the console
const counter = new Counter()

// render the counter inside the #root element
render(counter, document.querySelector('#root'))

```
