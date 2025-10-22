# How to Build the Map Teacher App

La configuration initiale est terminée. L'application
est maintenant prête à être "buildée".

Voici les dernières étapes à suivre :

  1. Ajoutez votre clé d'API Google Maps :
      * Ouvrez le fichier map-teacher-app/app.config.js.
      * Remplacez VOTRE_CLE_API_GOOGLE_MAPS_ICI par
        votre véritable clé d'API Google Maps à deux
        endroits (pour iOS et pour Android).

  2. Installez EAS CLI (si ce n'est pas déjà fait) :
      * Exécutez la commande : npm install -g eas-cli

  3. Connectez-vous à votre compte Expo :
      * Dans le dossier map-teacher-app, exécutez : npx 
        eas login

  4. Configurez le projet pour EAS Build :
      * Toujours dans le dossier map-teacher-app,
        exécutez : npx eas build:configure
      * Cela va créer un fichier eas.json dans votre
        projet.

  5. Créez le "Development Build" :
      * Rajouter une env :
        ```bash
        eas env:create
        ```
      * Exécutez la commande suivante pour la
        plateforme de votre choix (vous pouvez répéter
        l'opération pour l'autre).
      * Pour Android : npx eas build --profile 
        development --platform android
      * Pour iOS : npx eas build --profile development 
        --platform ios
      * EAS va vous donner une URL pour télécharger et
        installer l'application sur votre téléphone ou
        simulateur/émulateur.

  6. Lancez votre application :
      * Une fois l'application installée sur votre
        appareil, lancez le serveur de développement
        avec la commande : npx expo start --dev-client
      * Scannez le QR code depuis l'application que
        vous venez d'installer.

Votre carte devrait maintenant s'afficher
correctement. N'hésitez pas si vous avez d'autres
questions.

## Lien de l'application héberger sur EAS Build :

- Android : https://expo.dev/accounts/thomaslaforge/projects/template-map-app/builds/9bf4ffac-a000-4ad1-a3be-108d3bd60746

- IOS : A vous de la build si vous avez un compte ou alors mettez-vous en mode Expo Go :
```bash
npx expo start
```
Puis avec la touche `s` changer le mode de lancement en `Expo Go`.