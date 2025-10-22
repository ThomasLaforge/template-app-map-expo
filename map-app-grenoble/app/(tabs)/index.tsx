import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        googleMapsApiKey={Constants.expoConfig.extra.googleMapsApiKey}
        initialRegion={{
          latitude: 45.188529,
          longitude: 5.724524,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
