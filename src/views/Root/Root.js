import React from 'react';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplates';

const Root = () => (
  <div>
    <MainTemplate>
      <>
        <h1>Hello Roman</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </MainTemplate>
  </div>
);

export default Root;
