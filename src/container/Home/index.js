import React, {Component} from 'react';
import {Text, View, RefreshControl, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from './redux';
import {getUsers, getLoading} from './selector';
import _ from 'lodash';
import User from '../../component/UserCard';
import SearchInput from '../../component/SearchInput';

class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchUsers = _.debounce(this.fetchUsers, 500);
  }
  state = {
    searchInput: 'Ross',
  };
  componentDidMount() {
    this.fetchUsers();
  }
  onChangeText = text => {
    this.setState({searchInput: text}, this.fetchUsers);
  };
  fetchUsers = () => {
    const {searchInput} = this.state;
    this.props.fetchUsers(searchInput);
  };
  renderEmptyList = () => {
    const {users, isLoading} = this.props;
    if (!isLoading && !users.length) {
      return (
        <Text style={{textAlign: 'center', padding: 20}}>No User Found!</Text>
      );
    }
    return null;
  };
  onUserClick = userId => {
    this.props.navigation.navigate('User', {userId});
  };
  render() {
    console.log(this.props);
    const {searchInput} = this.state;
    const {users, isLoading} = this.props;
    return (
      <SafeAreaView style={{flex: 1, marginTop: 60, marginBottom: 40}}>
        <SearchInput value={searchInput} onChangeText={this.onChangeText} />
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={this.fetchUsers}
            />
          }
          data={users}
          renderItem={({item}) => (
            <User info={item} onUserClick={this.onUserClick} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: 50,
          }}
          ListFooterComponent={this.renderEmptyList}
          initialNumToRender={50}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  state => ({
    users: getUsers(state),
    isLoading: getLoading(state),
  }),
  {
    fetchUsers: fetchUsers,
  },
)(Home);
