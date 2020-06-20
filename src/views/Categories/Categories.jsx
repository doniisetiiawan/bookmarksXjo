/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadCategories } from '../../redux/modules/categories';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
      android: {
        paddingTop: 10,
      },
    }),
  },
});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: this.props.categories,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.setState({
      dataSource: this.props.categories,
    });
    this.props.dispatch(loadCategories());
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.props.categories !== nextProps.categories) {
      this.setState({
        dataSource: nextProps.categories,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>Categories</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={(rowData) => <Text>{rowData.item.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.all,
});

export default connect(mapStateToProps)(Categories);
