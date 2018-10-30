import React from 'react';
import { storiesOf } from '@storybook/react';
import withShowCode from '../ShowCode'

import Minimal, { docs as minimalDocs } from './Minimal'
import WithButtons, { docs as withButtonsDocs } from './WithButtons'

storiesOf('Controlled', module)
  .add('Minimal', () => withShowCode(Minimal, minimalDocs))
  .add('With buttons', () => withShowCode(WithButtons, withButtonsDocs))
