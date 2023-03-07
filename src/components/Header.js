import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'
import FONTS from '../constants/Fonts'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    paddingTop: 30,
    backgroundColor: COLORS.primary,
    alignItems:'center',
    justifyContent: 'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    fontFamily:FONTS.titles
  }
})