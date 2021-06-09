# MySip

## Summary

A mobile application built with [React Native](https://reactnative.dev/) that allows users to track their alcohol consumption habits.

## Setting up the dev environment

### React native environment

Check out the instructions on how to set up the React Native environment in their [setup guide](https://reactnative.dev/docs/environment-setup).

### Installing dependencies

To install the application's dependencies:

```sh
npm install
```

### Environment variables

Create a .env file in your project root, with the following structure:

```
ANDROID_KEYSTORE_PASSWORD=your_android_keychain_password
```

### CocoaPods libraries (iOS only)

To install CocoaPod libraries for iOS:

```sh
cd ios/
pod install
```

## Getting started

To start the application:

```sh
npm start
npm run ios/android
```
