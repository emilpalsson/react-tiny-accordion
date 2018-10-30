import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { prism } from 'react-syntax-highlighter/styles/prism'

const buttonStyles = {
  background: 'none',
  color: 'blue',
  border: 'none',
  textDecoration: 'underline',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer'
}

const overlayStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.2)',
  cursor: 'pointer'
}

const dialogStyles = {
  borderRadius: 15,
  background: 'rgb(245, 242, 240)',
  padding: 5,
  cursor: 'auto'
}

class ShowCode extends React.Component {
  state = {
    visible: false
  }

  show = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <button onClick={this.show} style={buttonStyles}>Show code</button>
        {this.state.visible && <React.Fragment>
          <div style={overlayStyles} onClick={this.close}>
            <div style={dialogStyles} onClick={e => e.stopPropagation()}>
              <SyntaxHighlighter language='jsx' style={prism}>
                {this.props.children}
              </SyntaxHighlighter>
              </div>
          </div>
        </React.Fragment>}
      </div>
    )
  }
}

const withShowCode = (Component, docs) => (
  <React.Fragment>
    <Component />
    <ShowCode>{docs}</ShowCode>
  </React.Fragment>
)

export default withShowCode
