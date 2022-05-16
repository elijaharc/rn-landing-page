
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import ImageDetail from '../../../src/components/imageDetail/ImageDetail';

storiesOf('Image Detail', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Image with first pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic1.jpeg')} />
  ))
  .add('Image with second pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic2.jpeg')} />
  ))
  .add('Image with third pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic3.jpeg')} />
  ))
  .add('Image with fourth pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic4.jpeg')} />
  ))
  .add('Image with fifth pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic5.jpeg')} />
  ))
  .add('Image with sixth pic', () => (
    <ImageDetail imageSource={require('../../../assets/brdgPic6.jpeg')} />
  ))





