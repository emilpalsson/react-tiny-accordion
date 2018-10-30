import React from 'react';
import { storiesOf } from '@storybook/react';
import withShowCode from '../ShowCode'

import Minimal, { docs as minimalDocs } from './Minimal'
import InitiallyExpanded, { docs as initiallyExpandedDocs } from './InitiallyExpanded'

storiesOf('Uncontrolled', module)
  .add('Minimal', () => withShowCode(Minimal, minimalDocs))
  .add('Initially expanded', () => withShowCode(InitiallyExpanded, initiallyExpandedDocs))
