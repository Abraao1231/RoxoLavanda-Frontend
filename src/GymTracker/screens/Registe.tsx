import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import ProgressBar from 'react-native-progress-bar';
import Sound from 'react-native-sound';

const Register = () => {
  const [timeRemaining, setTimeRemaining] = useState(10); // Tempo inicial da contagem regressiva em segundos

  useEffect(() => {
    // if (timeRemaining === 0) {
    //   // Pare de reproduzir o som quando a contagem regressiva chegar a zero
    //   sound.stop();
    //   return;
    // }

    const intervalId = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
      if (timeRemaining <= 0)
        clearInterval(intervalId)
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining]);

//   useEffect(() => {
//     if (sound) {
//       // Reproduza o som a cada segundo
//       const intervalId = setInterval(() => {
//         sound.play();
//       }, 1000);

//       return () => clearInterval(intervalId);
//     }
//   }, [sound]);

//   useEffect(() => {
//     // Carregue o som quando o componente for montado
//     const soundObject = new Sound('beep.mp3', (error) => {
//       if (error) {
//         console.error('Erro ao carregar o som:', error);
//         return;
//       }

//       setSound(soundObject);
//     });
//   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{timeRemaining}s</Text>
      {/* <ProgressBar progress={timeRemaining / 10} color="#007bff" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Register;
