import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';

export default class GiftedFormModal extends React.Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
      state: PropTypes.shape({ params: PropTypes.object }),
    })
  };

  static defaultProps = {
    navigation: null,
  };

  static navigationOptions = ({ navigation })=> {
    const { getTitle, onClose } = navigation.state.params || {};

    return {
      headerTitle: 'test',
      headerStyle: { backgroundColor: '#F37600' },
      headerTitleStyle: { color: 'white' },
      headerLeft: (<Text>Left</Text>),
      headerRight: (<Text>Right</Text>)
    };
  }

  render() {
    console.log(this.props);
    const { renderContent } = this.props.navigation.state.params || {};
    return (
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>
    );
  }
}