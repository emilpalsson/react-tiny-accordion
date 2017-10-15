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
});