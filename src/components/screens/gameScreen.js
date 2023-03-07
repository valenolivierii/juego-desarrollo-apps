import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import NumberContainer from '../NumberContainer';
import Card from '../Card';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/Fonts';

const GameScreen = ({ userOption }) => {

  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOption));

  return (
    <View style={styles.screen}>
      <Text style={styles.inputDescriptionText} >La suposicion del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button color={COLORS.delete}title='MENOR' onPress={() => { }} />
        <Button color={COLORS.green}title='MAYOR' onPress={() => { }} />
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  inputDescriptionText: {
    textAlign: 'center',
    fontFamily:FONTS.latoBold,
    color:COLORS.black,
  }
})