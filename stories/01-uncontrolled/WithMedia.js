import React from 'react'
import { action } from '@storybook/addon-actions';
import Accordion from '../../src'
import '../simple.css'

export default () => (
  <Accordion className="accordion" onChange={action('onChange')}>
    <div data-header="📼 Video" style={{ height: 300, padding: 0, overflow: 'hidden' }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2Z4m4lnjxkY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div data-header="🖼️ Image">
      <img src="http://themodernape.com/wp-content/uploads/2014/09/internet-troll-620x348.jpg" width="100%" />
    </div>
  </Accordion>
)

export const docs =
`<Accordion>
  <div data-header="📼 Video">
    <iframe src="..."></iframe>
  </div>
  <div data-header="🖼️ Image">
    <img src="..." />
  </div>
</Accordion>`
