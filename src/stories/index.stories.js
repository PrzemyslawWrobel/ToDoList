import React from 'react';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome  />);

storiesOf('Button', module)
  .add('with text', () => <p>Hello Button</p>)
  .add('with some emoji', () => <p>gdfgsd</p>);
