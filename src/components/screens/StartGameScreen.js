import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

import COLORS from '../../constants/Colors'
import FONTS from '../../constants/Fonts'

import Card from '../Card'
import Input from '../Input'
import NumberContainer from '../NumberContainer'

const StartGameScreen = ({ onStartGame }) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputDescriptionText}>Elija un numero</Text>
          <Input style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="Limpiar" onPress={resetInputHandler} color={COLORS.delete} />
            </View>
            <View style={styles.button}>
              <Button title="Confirmar" onPress={confirmInputHandler} color={COLORS.primary} />
            </View>
          </View>
        </Card>
        {confirmed &&
          <Card style={styles.selectedNumberContainer}>
            <Text style={styles.inputDescriptionText} >Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button color={COLORS.accent} title="Iniciar Juego" onPress={() => {
              onStartGame(selectedNumber)
              
            }} />
          </Card>
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    fontFamily: FONTS.latoBold,
    color: COLORS.black
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center'
  },
  inputDescriptionText: {
    textAlign: 'center',
    fontFamily:FONTS.latoBold,
    color:COLORS.black,
  },
  input: {
    width: 50,
    textAlign: 'center',
    color:COLORS.black,
    fontFamily: FONTS.titles,
    fontSize:18
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  selectedNumberContainer: {
    marginTop: 20,
    width: 200,
    maxWidth: '80%',
    padding: 10,
    alignItems: 'center',
  }
})