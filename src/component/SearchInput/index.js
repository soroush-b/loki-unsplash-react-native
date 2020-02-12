import React from 'react';
import {TextInput} from 'react-native';
import _ from 'lodash';
import styles from './style';

export default ({onChangeText, value}) => {
  return (
    <TextInput
      placeholder="Search User ..."
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
    />
  );
};
