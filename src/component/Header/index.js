import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import _ from 'lodash';
import styles from './style';

export default ({onBack}) => {
  return (
    <TouchableOpacity onPress={onBack} style={styles.backBtn}>
      <View style={styles.backShape} />
      <Text style={styles.backBtnText}>Back</Text>
    </TouchableOpacity>
  );
};
