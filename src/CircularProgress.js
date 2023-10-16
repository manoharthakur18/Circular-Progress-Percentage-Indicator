import React from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';

propStyle = percent => {
  if (percent < 0 || percent > 100) {
    // throw new Error('Value must be between 0 and 100.');
    Alert.alert('Invalid Value', 'Please enter value between 1 to 100');
    return null;
  }
  const base_degrees = -135;
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

const CircularProgress = ({percent = 59}) => {
  let stylesFromProps = propStyle(percent);

  return (
    <View
      style={[
        styles.container,
        percent > 50 && percent < 101 && {borderColor: '#84D644'},
      ]}>
      <View
        style={[
          styles.progressLayer,
          stylesFromProps,
          (percent < 50 || percent > 100) && {zIndex: 0},
        ]}></View>
      <View style={styles.offsetLayer}></View>
      <Text style={styles.display}>
        {percent > 0 && percent < 101 ? percent : '0'}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLayer: {
    width: 200,
    height: 200,
    position: 'absolute',
    zIndex: 5,
    borderWidth: 20,
    borderLeftColor: 'rgba(0,0,0,0.01)',
    borderBottomColor: 'rgba(0,0,0,0.01)',
    borderRightColor: '#84D644',
    borderTopColor: '#84D644',
    borderRadius: 100,
    transform: [{rotateZ: '-135deg'}],
  },
  offsetLayer: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderRadius: 100,
    borderLeftColor: 'rgba(0,0,0,0.01)',
    borderBottomColor: 'rgba(0,0,0,0.01)',
    borderRightColor: 'grey',
    borderTopColor: 'grey',
    transform: [{rotateZ: '-135deg'}],
  },
  display: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default CircularProgress;
