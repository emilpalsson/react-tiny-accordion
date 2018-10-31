import React from 'react'
import { action } from '@storybook/addon-actions';
import Accordion, { AccordionItem } from '../../src'
import '../simple.css'

const range = size => [...Array(size).keys()];
const items = range(50).map(i => ({ id: i, title: `Item #${i}`, content: `Content ${i}` }))

export default () => (
  <Accordion className="accordion" onChange={action('onChange')}>
    {items.map(item => (
      <AccordionItem key={item.id} header={item.title} className="inner">
        <p>{item.content}</p>
      </AccordionItem>
    ))}
  </Accordion>
)

export const docs =
`<Accordion>
  {items.map(item => (
    <AccordionItem key={item.id} header={item.title}>
      <p>{item.content}</p>
    </AccordionItem>
  ))}
</Accordion>`
