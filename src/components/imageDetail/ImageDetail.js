import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';

const ImageDetail = ({ imageSource }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={{ width: 40, height: 40 }} />
        </View>
    )
}

export default ImageDetail;