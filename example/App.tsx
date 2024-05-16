import { StyleSheet, Text, View } from 'react-native';
import {
  Banner,
  Interstitial,
  NativeAdsManager,
} from 'react-native-ad-manager'

import * as ExpoModuleTest from 'expo-module-test';

export default function App() {


  return (
    <View style={styles.container}>
      <Banner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDevices={['testDevices']}
        onAdFailedToLoad={error => console.error(error)}
        onAppEvent={event => console.log(event.name, event.info)}
      />
      <Text>Hello</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
