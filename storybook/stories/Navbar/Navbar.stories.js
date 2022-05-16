import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Navbar from '../../../src/components/navbar/Navbar';

storiesOf('Navbar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with all icons and text', () => (
    <Navbar onPress={action('clicked-text')} />
  ))
