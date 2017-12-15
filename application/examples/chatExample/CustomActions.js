import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CustomActions extends React.Component {

  static propTypes = {
    getIcon: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { getIcon, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onPress}
      >
        <Icon name={ getIcon() } size={18} color="#b2b2b2" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
	  borderColor: '#b2b2b2',
	  borderWidth: 1,
	  justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});