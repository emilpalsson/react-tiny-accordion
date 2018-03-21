import React from 'react'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.index = typeof props.selectedIndex !== 'undefined' ? props.selectedIndex : -1
    this.nodes = []
    this.state = {
      heights: React.Children.map(
        this.props.children,
        (child, index) => (index === this.props.selectedIndex ? 'auto' : 0)
      )
    }
  }

  componentWillReceiveProps(props) {
    if (typeof props.selectedIndex !== 'undefined' && this.index !== props.selectedIndex) {
      this.toggle(props.selectedIndex)
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
          () => resolve()
        )
      }
      else {
        resolve()
      }
    })
  }

  toggle(index, click) {
    clearTimeout(this.timeout)

    if (click) {
      if (this.props.onChange) {
        this.props.onChange(index, this.index !== index, this.index !== index ? index : -1)
      }
      if (!this.props.changeOnClick) return
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
    const style = {
      overflow: 'hidden',
      transition: `height ${this.props.transitionDuration}ms ${this.props.transitionTimingFunction}`
    }
    const nodes = React.Children.map(this.props.children, (child, index) => (
      <div
        key={index}
        ref={div => {
          this.nodes[index] = div
        }}
        className={this.index === index ? this.props.openClassName : ''}
      >
        <div onClick={() => this.toggle(index, true)}>{child.props['data-header']}</div>
        <div style={{ ...style, height: this.state.heights[index] }}>{child}</div>
      </div>
    ))
    return <div className={this.props.className}>{nodes}</div>
  }
}

Accordion.defaultProps = {
  transitionDuration: 500,
  transitionTimingFunction: 'ease',
  openClassName: 'open',
  changeOnClick: true
}

export default Accordion
