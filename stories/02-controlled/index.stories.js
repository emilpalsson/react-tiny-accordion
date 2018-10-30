import React from 'react';
import { storiesOf } from '@storybook/react';
import withShowCode from '../ShowCode'

import Minimal, { docs as minimalDocs } from './Minimal'

storiesOf('Controlled', module)
  .add('Minimal', () => withShowCode(Minimal, minimalDocs))
