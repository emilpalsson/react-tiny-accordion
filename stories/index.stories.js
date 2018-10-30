import React from 'react';
import { storiesOf } from '@storybook/react';
import Minimal from './Minimal'
import InitiallyExpanded from './InitiallyExpanded'
import Controlled from './Controlled'

storiesOf('Uncontrolled', module)
  .add('Minimal', () => <Minimal />)
  .add('Initially expanded', () => <InitiallyExpanded />)

storiesOf('Controlled', module)
  .add('Minimal', () => <Controlled />);
