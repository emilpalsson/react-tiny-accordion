import React from 'react'
import { action } from '@storybook/addon-actions';
import Accordion, { AccordionItem } from '../../src'
import '../simple.css'

export default () => (
  <Accordion className="accordion" onChange={action('onChange')}>
    <AccordionItem header="📼 Video" style={{ height: 300, padding: 0, overflow: 'hidden' }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2Z4m4lnjxkY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </AccordionItem>
    <AccordionItem header="🖼️ Image">
      <img src="http://themodernape.com/wp-content/uploads/2014/09/internet-troll-620x348.jpg" width="100%" />
    </AccordionItem>
  </Accordion>
)

export const docs =
`<Accordion>
  <AccordionItem header="📼 Video">
    <iframe src="..."></iframe>
  </AccordionItem>
  <AccordionItem header="🖼️ Image">
    <img src="..." />
  </AccordionItem>
</Accordion>`
