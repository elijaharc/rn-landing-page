
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Footer from '../../../src/components/footer/Footer';

storiesOf('Footer', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Footer', () => (
    <Footer />
  ))





