
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Review from '../../../src/components/reviews/Review';
import MiniBridgeLogo from '../../../assets/svg/MiniBridgeLogo';

storiesOf('Reviews', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Review section w/ 3 intros', () => (
    <Review icon={<MiniBridgeLogo />} text={"3 intros are ready to review and forward"} color={'#568fff'} />
  ))
  .add('Review section w/ John', () => (
    <Review icon={require('../../../assets/bridgeSvg1.png')} text={"John is able to offer an intro to Sequoia"} color={'#5ac572'} />
  ))
  .add('Review section w/ Amy', () => (
    <Review icon={require('../../../assets/bridgeSvg2.png')} text={"Amy requested a forwardable from you"} color={'#a07fff'} />
  ))
  .add('Review section w/ Kate', () => (
    <Review icon={require('../../../assets/bridgeSvg3.png')} text={"Kate said the intro to Jeni was great"} color={'#5ac572'} />
  ))
  .add('Review section w/ Lida and Dan', () => (
    <Review icon={<MiniBridgeLogo />} text={"Lida and Dan are now connected 🎉"} color={'#568fff'} />
  ))





