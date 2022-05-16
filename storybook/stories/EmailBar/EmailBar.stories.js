
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import EmailBar from '../../../src/components/emailBar/EmailBar';

storiesOf('Email Bar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Email', () => (
    <EmailBar email={'eli.arcedera@gmail.com'} />
  ))





