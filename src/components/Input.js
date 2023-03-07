import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'

const Input = ({ style, ...otherProps }) => {
  return (
    <TextInput style={[styles.input, style]} {...otherProps} />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1.5,
    marginVertical: 10
  }
})