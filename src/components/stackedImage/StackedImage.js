import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import ImageDetail from '../imageDetail/ImageDetail';

const StackedImage = () => {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic1.jpeg')} />
            </View>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic2.jpeg')} />
            </View>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic3.jpeg')} />
            </View>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic4.jpeg')} />
            </View>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic5.jpeg')} />
            </View>
            <View style={styles.imageStyle}>
                <ImageDetail imageSource={require('../../../assets/brdgPic6.jpeg')} />
            </View>
        </View>
    )
}

export default StackedImage;