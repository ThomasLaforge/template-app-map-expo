import 'dotenv/config';

const googleMapsApiKey = process.env.EAS_BUILD_PLATFORM === 'android' || process.env.EAS_BUILD_PLATFORM === 'ios'
  ? process.env.GOOGLE_MAPS_API_KEY
  : process.env.GOOGLE_MAPS_API_KEY;

export default {
  "expo": {
    "name": "map-app-grenoble",
    "slug": "map-app-grenoble",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      googleMapsApiKey
    }
  }
};