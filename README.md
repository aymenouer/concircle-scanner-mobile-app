# Concircle Scanner — mobile app

A cross-platform barcode-scanning application that helps compare scanned order and position codes and provides immediate feedback about whether a scan is valid.

> **Project status:** Earlier personal project built with Expo SDK 44 and React Native 0.64. The original dependencies may need updates to run in a current development environment.

## Features

- Scan order and position barcodes using the phone camera
- Display scanned values in their corresponding fields
- Visual indication of valid and invalid scans
- Haptic feedback (vibration) on invalid scans
- Designed for iOS and Android

## Screenshots

| Wireframe | iOS screen | Android screen |
| --- | --- | --- |
| ![Wireframe](https://user-images.githubusercontent.com/49178153/160923524-ed970fd3-3495-4a2e-acc6-eebdac28ddd8.PNG) | ![iOS app](https://user-images.githubusercontent.com/49178153/160926871-e6ddf33d-5228-4fb6-a7c6-4f59dd4ecac3.png) | ![Android app](https://user-images.githubusercontent.com/49178153/160925490-ffc7b326-8034-4fab-baa8-a53e0666266a.png) |

## Tech stack

- React Native 0.64 / React 17
- Expo SDK 44
- `expo-barcode-scanner`
- JavaScript

## Getting started

```bash
git clone https://github.com/aymenouer/concircle-scanner-mobile-app.git
cd concircle-scanner-mobile-app
npm install
npm start
```

Use a compatible Expo development environment to run the project on a device or simulator. Current Expo Go releases may not support this older SDK.

## Related project

[Barcode generator app](https://github.com/aymenouer/concircle-scanner-app) — complementary utility used to generate codes for testing the scanner workflow.

## Potential improvements

- Upgrade the Expo SDK and replace deprecated scanning APIs
- Add automated tests for scan validation and feedback states
- Improve camera permission and error-state handling
- Add an updated demo video and installation instructions

## Author

[Aymen Ouerghui](https://github.com/aymenouer)
