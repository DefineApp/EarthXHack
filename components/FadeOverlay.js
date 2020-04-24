import React from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';

export default React.memo(function FadeOverlay({ opacity }) {
  return (
    <Animatable.View
      transition="opacity"
      style={{opacity, ...styles.fade}}
      duration={1000}
      pointerEvents="none"
    >
      <LinearGradient
        style={styles.fade}
        colors={[`rgba(0,0,0,0.1)`, 'transparent']}
      />
    </Animatable.View>
  );
});

const styles = StyleSheet.create({
  fade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 1
  }
});
