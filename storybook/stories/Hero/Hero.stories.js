import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Review from "../../../src/components/reviews/Review";
import ImageDetail from "../../../src/components/imageDetail/ImageDetail";
import MiniBridgeLogo from "../../../assets/svg/MiniBridgeLogo";
import CustomerLogo from "../../../src/components/customerLogo/CustomerLogo";

storiesOf('Hero', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Review w/ mini Bridge logo', () => (
    <Review icon={<MiniBridgeLogo />} text={"3 intros are ready to review and forward"} color={'#568fff'} />
  ))
  .add('Review with John', () => (
    <Review icon={require('../../../assets/bridgeSvg1.png')} text={"John is able to offer an intro to Sequoia"} color={'#5ac572'} />
  ))
  .add('Review with Amy', () => (
    <Review icon={require('../../../assets/bridgeSvg2.png')} text={"Amy requested a forwardable from you"} color={'#a07fff'} />
  ))
  .add('Review with Kate', () => (
    <Review icon={require('../../../assets/bridgeSvg3.png')} text={"Kate said the intro to Jeni was great"} color={'#5ac572'} />
  ))
  .add('Review with Lida & Dan', () => (
    <Review icon={<MiniBridgeLogo />} text={"Lida and Dan are now connected 🎉"} color={'#568fff'} />
  ))
  .add('Image detail', () => (
    <ImageDetail icon={require('../../../assets/bridgeSvg1.png')} text={"John is able to offer an intro to Sequoia"} color={'#5ac572'} />
  ))
  .add('Mini bridge logo', () => (
    <MiniBridgeLogo />
  ))
  .add('Customer logos', () => (
    <CustomerLogo />
  ))
