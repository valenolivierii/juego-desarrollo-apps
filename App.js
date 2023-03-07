import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import Header from './src/components/Header';
import GameScreen from './src/components/screens/gameScreen';
import StartGameScreen from './src/components/screens/StartGameScreen';
import COLORS from './src/constants/Colors';


export default function App() {

  const [fontsLoaded] = useFonts({
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    'climateCrisis': require('./assets/fonts/PermanentMarker-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header title="Adivina el numero" />
      {
        !userNumber
          ? <StartGameScreen onStartGame={startGameHandler} />
          : <GameScreen userOption={userNumber} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  },
});
