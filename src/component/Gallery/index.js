import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import styles from './style';
import GestureRecognizer from 'react-native-swipe-gestures';

export default class Gallery extends Component {
  state = {
    ModalVisibleStatus: false,
    imageId: null,
  };
  closeModal = () => {
    this.setState({ModalVisibleStatus: false});
  };
  showModal = id => {
    this.setState({ModalVisibleStatus: true, imageId: id});
  };
  setImage = id => {
    this.setState({imageId: id});
  };
  onSwipeLeft = gestureState => {
    const index = this.findImageIndex();
    const {data} = this.props;
    const nextIndex = index - 1 < 0 ? data.length - 1 : index - 1;
    this.setImage(_.get(data, [nextIndex, 'id']));
  };

  onSwipeRight = gestureState => {
    const index = this.findImageIndex();
    const {data} = this.props;
    this.setImage(_.get(data, [(index + 1) % data.length, 'id']));
  };
  renderEmptyList = () => {
    if (!this.props.data || !this.props.data.length) {
      return <Text>No Image Found!</Text>;
    }
    return null;
  };
  findImage = () => {
    const {imageId} = this.state;
    const {data} = this.props;
    return data.find(item => item.id === imageId);
  };
  findImageIndex = () => {
    const {imageId} = this.state;
    const {data} = this.props;
    return data.findIndex(item => item.id === imageId);
  };
  config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 20,
  };
  render() {
    const {data} = this.props;
    return (
      <View style={styles.cont}>
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={this.closeModal}>
          <GestureRecognizer
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            config={this.config}
            style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{uri: _.get(this.findImage(), 'urls.regular')}}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={this.closeModal}>
              <Text style={styles.closeBtnText}>X</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={this.onSwipeLeft}
                style={styles.actionBtn}>
                <View style={[styles.arrow, styles.backShape]} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.onSwipeRight}
                style={styles.actionBtn}>
                <View style={[styles.arrow, styles.nextShape]} />
              </TouchableOpacity>
            </View>
          </GestureRecognizer>
        </Modal>

        <Text style={styles.title}>Gallery</Text>
        <View style={styles.seperator} />
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.showModal(item.id)}
              style={{flex: 1}}>
              <Image
                source={{uri: _.get(item, 'urls.regular')}}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          ListFooterComponent={this.renderEmptyList}
          initialNumToRender={50}
        />
      </View>
    );
  }
}
