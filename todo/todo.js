class TodoApp extends Component {
  constructor (props) {
    super(props)
    this.state = { todos: [] }
    this.addTodo = todo => {
      const todos = [...this.state.todos, todo]
      this.setState({ todos })
    }
  }

  render () {
    return new Element(
      'div',
      null,
      null,
      new Element(
        'ul',
        null,
        null,
        ...this.state.todos.map(todo => new Element('li', todo))
      ),
      new Element(
        'input',
        null,
        { id: 'todoInput' }
      ),
      new Element(
        'button',
        'ADD TODO',
        {
          onclick: () => {
            const input = document.querySelector('#todoInput')
            if (input.value.length < 3) return
            this.addTodo(input.value)
            input.value = ''
          }
        }
      )
    )
  }
}

const todoApp = new TodoApp()

render(todoApp, document.querySelector('#root'))
