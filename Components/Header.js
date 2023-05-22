import React from 'react';
import { View, StyleSheet } from 'react-native';

const HeaderContainer = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
  };
  

export default HeaderContainer