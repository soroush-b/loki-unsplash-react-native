import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cont: {
    marginHorizontal: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginTop: 15,
    marginBottom: 35,
  },
  image: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    marginHorizontal: 7,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    paddingBottom: 1,
  },
  subtitle: {
    color: '#999',
  },
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 30,
    height: 30,
    marginTop: 20,
    top: 30,
    right: 20,
    position: 'absolute',
  },
  closeBtnText: {
    fontSize: 30,
  },
  actions: {
    top: '48%',
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  actionBtn: {
    backgroundColor: '#111',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  actionsText: {
    fontSize: 25,
    color: '#fff',
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
  },
  nextShape: {
    transform: [{rotate: '90deg'}],
    paddingLeft: 2,
  },
  backShape: {
    transform: [{rotate: '-90deg'}],
    paddingRight: 2,
  },
});
