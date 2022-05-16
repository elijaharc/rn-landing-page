
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Dropbox from "../../../assets/svg/Dropbox"
import Mercury from "../../../assets/svg/Mercury"
import Berkeley from "../../../assets/svg/Berkeley"
import Techstars from "../../../assets/svg/Techstars"
import SignalFire from "../../../assets/svg/SignalFire"

storiesOf('Customer Logos', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Dropbox logo', () => (
    <Dropbox />
  ))
  .add('Mercury logo', () => (
    <Mercury />
  ))
  .add('Berkeley logo', () => (
    < Berkeley />
  ))
  .add('Techstars logo', () => (
    < Techstars />
  ))
  .add('SignalFire logo', () => (
    <SignalFire />
  ))





