import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 30,
  },
  backBtnText: {
    fontSize: 15,
    paddingLeft: 7,
  },
  backShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 13,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#444',
    transform: [{rotate: '-90deg'}],
  },
});
