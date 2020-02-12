import React from 'react';
import {View, Text, Image} from 'react-native';
import _ from 'lodash';
import styles from './style';

export default ({info}) => {
  return (
    <View style={styles.cont}>
      <Image
        source={{uri: _.get(info, 'profile_image.large')}}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {_.get(info, 'name')}
        </Text>
        <Text style={styles.subtitle}>@{_.get(info, 'username')}</Text>
      </View>
    </View>
  );
};
