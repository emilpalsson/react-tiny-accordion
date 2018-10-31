import React from 'react';
import { storiesOf } from '@storybook/react';
import withShowCode from '../ShowCode'

import Minimal, { docs as minimalDocs } from './Minimal'
import InitiallyExpanded, { docs as initiallyExpandedDocs } from './InitiallyExpanded'
import Nested, { docs as nestedDocs } from './Nested'
import WithMedia, { docs as withMediaDocs } from './WithMedia'
import ManyItems, { docs as manyItemsDocs } from './ManyItems'

storiesOf('Uncontrolled', module)
  .add('Minimal', () => withShowCode(Minimal, minimalDocs))
  .add('Initially expanded', () => withShowCode(InitiallyExpanded, initiallyExpandedDocs))
  .add('Nested', () => withShowCode(Nested, nestedDocs))
  .add('With media', () => withShowCode(WithMedia, withMediaDocs))
  .add('Many items', () => withShowCode(ManyItems, manyItemsDocs))
