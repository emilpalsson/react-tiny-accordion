import React from 'react'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    const { selectedIndex, defaultSelectedIndex, children } = props
    const controlled = typeof selectedIndex !== 'undefined'
    this.index = controlled ? selectedIndex : defaultSelectedIndex
    this.nodes = []
    this.state = {
      controlled,
      heights: React.Children.map(
        children,
        (child, index) => (index === this.index ? 'auto' : 0)
      )
    }
  }

  componentWillReceiveProps(props) {
    const { selectedIndex } = props
    if (typeof selectedIndex !== 'undefined' && this.index !== selectedIndex) {
      this.toggle(selectedIndex)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  close(index) {
    setTimeout(() => this.setHeight(index, 0), 50)
  }

  setHeight(index, height, callback) {
    const heights = this.state.heights.slice()
    heights[index] = height
    this.setState({ heights }, callback)
  }

  open(index) {
    clearTimeout(this.timeout)
    this.setHeight(index, this.nodes[index].children[1].children[0].offsetHeight, () => {
      this.timeout = setTimeout(() => this.setHeight(index, 'auto'), this.props.transitionDuration)
    })
  }

  setFixedHeightOnCurrentlyOpenedItem() {
    return new Promise(resolve => {
      if (this.index > -1) {
        this.setHeight(
          this.index,
          this.nodes[this.index].children[1].children[0].offsetHeight,
          resolve
        )
      }
      else {
        resolve()
      }
    })
  }

  toggle(index, click) {
    const { onChange } = this.props 
    clearTimeout(this.timeout)

    if (click) {
      if (onChange) {
        onChange(index, this.index !== index, this.index !== index ? index : -1)
      }
      if (this.state.controlled) return
    }

    // First, set a fixed height on the currently opened item, for collapse animation to work
    this.setFixedHeightOnCurrentlyOpenedItem().then(() => {
      if (this.index > -1) {
        this.close(this.index)
      }

      if (index > -1 && index !== this.index) {
        this.index = index
        this.open(index)
      }
      else {
        this.index = -1
      }
    })
  }

  render() {
    const { transitionDuration, transitionTimingFunction, className, openClassName } = this.props
    const nodes = React.Children.map(this.props.children, (child, index) => (
      <div
        key={index}
        ref={div => {
          this.nodes[index] = div
        }}
        className={this.index === index ? openClassName : ''}
      >
        <div onClick={() => this.toggle(index, true)}>{child.props.header}</div>
        <div style={{
          overflow: 'hidden',
          transition: `height ${transitionDuration}ms ${transitionTimingFunction}`,
          height: this.state.heights[index] 
        }}>{child}</div>
      </div>
    ))
    return <div className={className}>{nodes}</div>
  }
}

Accordion.defaultProps = {
  transitionDuration: 500,
  transitionTimingFunction: 'ease',
  openClassName: 'open',
  defaultSelectedIndex: -1
}

const AccordionItem = props => {
  const { header, children, ...remainingProps } = props
  return <div {...remainingProps}>{children}</div>
}

export default Accordion
export { AccordionItem }
