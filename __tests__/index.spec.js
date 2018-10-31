import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Accordion, { AccordionItem } from '../src'

configure({ adapter: new Adapter() })

describe('General', function() {
  it('should render without crashing', function() {
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

  it('should render correct markup', function() {
    const accordion = shallow(
      <Accordion>
        <AccordionItem header="Header1">Content 1</AccordionItem>
        <AccordionItem header="Header2">Content 2</AccordionItem>
      </Accordion>
    )
    expect(accordion.html()).toEqual('<div><div><div>Header1</div><div style=\"overflow:hidden;transition:height 500ms ease;height:0\"><div>Content 1</div></div></div><div><div>Header2</div><div style=\"overflow:hidden;transition:height 500ms ease;height:0\"><div>Content 2</div></div></div></div>')
  })
})

describe('Selected index', function() {
  it("should render all children collapsed when not passing selectedIndex or defaultSelectedIndex", function() {
    const accordion = shallow(
      <Accordion>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.html()).not.toContain('height:auto')
  })

  it('should render second child expanded when passing selectedIndex 1 (controlled behaviour)', function() {
    const accordion = shallow(
      <Accordion selectedIndex={1}>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.childAt(1).html()).toContain('height:auto')
  })

  it('should render second child expanded when passing defaultSelectedIndex 1 (uncontrolled behaviour)', function() {
    const accordion = shallow(
      <Accordion defaultSelectedIndex={1}>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    expect(accordion.childAt(1).html()).toContain('height:auto')
  })
})

describe('Event handler', function() {
  it('should call onChange with correct params when clicking a collapsed item header', function() {
    const handleChange = jest.fn()
    const accordion = mount(
      <Accordion onChange={handleChange}>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    accordion.childAt(0).childAt(1).childAt(0).simulate('click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(1, true, 1)
  })

  it('should call onChange with correct params when clicking an expanded item header', async function() {
    const handleChange = jest.fn()
    const accordion = mount(
      <Accordion onChange={handleChange} defaultSelectedIndex={1}>
        <AccordionItem header="Header">Content</AccordionItem>
        <AccordionItem header="Header">Content</AccordionItem>
      </Accordion>
    )
    accordion.childAt(0).childAt(1).childAt(0).simulate('click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(1, false, -1)
  })
})
