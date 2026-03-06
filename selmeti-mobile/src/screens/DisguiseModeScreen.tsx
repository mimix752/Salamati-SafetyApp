import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DisguiseModeScreenProps {
  onExit: () => void;
}

export default function DisguiseModeScreen({ onExit }: DisguiseModeScreenProps) {
  const [display, setDisplay] = useState('0');
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  const handleLogoTap = () => {
    const now = Date.now();
    
    if (now - lastTapTime > 2000) {
      setTapCount(1);
    } else {
      setTapCount(tapCount + 1);
    }
    
    setLastTapTime(now);

    if (tapCount + 1 >= 3) {
      setTapCount(0);
      onExit();
    }
  };

  const handleButtonPress = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={handleLogoTap}
        activeOpacity={1}
      >
        <Text style={styles.title}>Calculatrice</Text>
      </TouchableOpacity>

      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  ['/', '*', '-', '+', '='].includes(button) && styles.operatorButton
                ]}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  ['/', '*', '-', '+', '='].includes(button) && styles.operatorText
                ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <Text style={styles.hint}>Appuyez 3 fois sur "Calculatrice" pour sortir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  displayContainer: {
    backgroundColor: '#fff',
    padding: 30,
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  display: {
    fontSize: 48,
    textAlign: 'right',
    color: '#333'
  },
  buttonsContainer: {
    flex: 1,
    padding: 20,
    gap: 15
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    flex: 1
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  operatorButton: {
    backgroundColor: '#2196F3'
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333'
  },
  operatorText: {
    color: '#fff'
  },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    color: '#999',
    padding: 10,
    opacity: 0.3
  }
});
