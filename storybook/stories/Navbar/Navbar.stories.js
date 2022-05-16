import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../CenterView';
import Navbar from '../../../src/components/navbar/Navbar';

storiesOf('Navbar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Navbar onPress={action('clicked-text')} />
  ))
