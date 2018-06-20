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
const counter = new Counter()

// replace the body of the page with the component
render(counter, document.querySelector('#root'))
