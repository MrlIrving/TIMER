import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [customInterval, setCustomInterval] = useState()
  const [backgroundColor, setBackgroundColor] = useState('#fff') // Cor inicial do fundo

  const startTimer = () => {
    setBackgroundColor('#3374ee'); // Altera a cor para azul ao iniciar
    setCustomInterval(
      setInterval(() => {
        changeTime()
      }, 1000)
    );
  }

  const stopTimer = () => {
    setBackgroundColor('#f8225d'); // Altera a cor para rosa ao parar
    if (customInterval) {
      clearInterval(customInterval);
    }
  }

  const clear = () => {
    stopTimer(0)
    setMinutes(0)
    setSeconds(0)
    setBackgroundColor('#ffff8d'); // Altera a cor para amarelo ao limpar
  }

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 === 60) {
        setMinutes(minutes + 1)
        return 0
      }
      return prevState + 1
    })
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.titulo}>
        TIMER
      </Text>
      <Image source={require("./assets/logo.png")} style={styles.logo}/>

      <Text style={styles.textTimer}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Start' onPress={startTimer} />
        <Button title='Stop' onPress={stopTimer}/>
        <Button title='Clear' onPress={clear}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer: {
    fontSize: 30,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  logo: {
    marginBottom: 60,
    marginTop: 60,
  },
  titulo: {
    fontSize: 30,
  }
});