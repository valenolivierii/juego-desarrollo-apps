import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'
import FONTS from '../constants/Fonts'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 2,
    borderColor: COLORS.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: COLORS.accent,
    fontSize: 22,
    fontFamily: FONTS.titles
  }
})
