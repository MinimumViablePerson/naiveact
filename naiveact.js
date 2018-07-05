// Base Component class that components extend from
class Component {
  constructor (props = {}) {
    this.type = 'component'
    this.props = props
    this.setState = state => {
      this.state = { ...this.state, ...state }
      this.renderer && this.renderer()
    }
  }

  // Your component must have a *render* method
  // and that method must return an *Element*
}

// Base Element object
// Renders into an HTML element, with optional text and child elements
class Element {
  constructor (elementType, text, props, ...children) {
    this.type = 'element'
    this.elementType = elementType
    this.text = text
    this.props = props || {}
    this.children = children
  }

  render () {
    const el = document.createElement(this.elementType)
    el.innerText = this.text

    for (const key of Object.keys(this.props)) {
      key.startsWith('on')
        ? el.addEventListener(key.replace('on', ''), this.props[key])
        : el.setAttribute(key, this.props[key])
    }

    for (const child of this.children) {
      el.appendChild(child.render())
    }

    return el
  }
}

// Take a *component* and render it inside the *target* DOM element
function render (component, target) {
  component.renderer = () => render(component, target)
  target.innerHTML = ''

  component.type === 'component' && target.appendChild(component.render().render())
  component.type === 'element' && target.appendChild(component.render())
}
