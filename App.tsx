import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Modal,
  Button,
} from 'react-native';

import LottieView from 'lottie-react-native';

import { cat } from './animations';

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const handlePress = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 7000);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Button title={'Load'} onPress={handlePress} />
        </View>
      </SafeAreaView>
      <Modal
        visible={visible}
        style={styles.modalContainer}
        animationType={'fade'}
        transparent
        statusBarTranslucent={true}
      >
        <View style={styles.modalContainer}>
          <LottieView style={styles.animation} source={cat} autoPlay loop />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  animation: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000060',
  },
});

export default App;
