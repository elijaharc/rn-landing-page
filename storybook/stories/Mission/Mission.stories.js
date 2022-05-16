
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import ImageDetail from '../../../src/components/imageDetail/ImageDetail';
import Mission from '../../../src/components/mission/Mission';

storiesOf('Mission', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Mission section', () => (
    <Mission />
  ))





