import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Accordion, { AccordionItem } from '../src'

configure({ adapter: new Adapter() })

describe('Accordion', function() {
  it('should render without throwing an error', function() {
    const accordion = shallow(
      <Accordion>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.contains('Header')).toBe(true)
  })

  it('should render three items when passing three children', function() {
    const accordion = shallow(
      <Accordion>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.children()).toHaveLength(3)
  })

  it("shouldn't render any child expanded when not passing selectedIndex", function() {
    const accordion = shallow(
      <Accordion>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.html()).not.toContain('height:auto')
  })

  it('should render second child expanded when passing selectedIndex 1', function() {
    const accordion = shallow(
      <Accordion selectedIndex={1}>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.childAt(1).html()).toContain('height:auto')
  })
})
