import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from '../src';

configure({ adapter: new Adapter() });

describe('Accordion', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Accordion><div data-header='Header'>Content</div></Accordion>).contains('Header')).toBe(true);
  });
  
  it('should render three items when passing three children', function() {
    const accordion = shallow(<Accordion><div data-header='Header'>Content</div><div data-header='Header'>Content</div><div data-header='Header'>Content</div></Accordion>)
    expect(accordion.children().length).toBe(3);
  });
  
  it("should'nt render any child expanded when not passing selectedIndex", function() {
    const accordion = shallow(<Accordion><div data-header='Header'>Content</div><div data-header='Header'>Content</div></Accordion>)
    expect(accordion.childAt(1).html().includes('height:auto')).toBe(false);
  });

  it('should render second child expanded when passing selectedIndex 2', function() {
    const accordion = shallow(<Accordion selectedIndex={1}><div data-header='Header'>Content</div><div data-header='Header'>Content</div></Accordion>)
    expect(accordion.childAt(1).html().includes('height:auto')).toBe(true);
  });
});