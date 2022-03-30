import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Vibration,
  SafeAreaView,
  TextInput,
} from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headercontainer}>
        <Text style={styles.headertext}>Concircle Scanner App</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [textOrder, setTextOrder] = useState("");
  const [textPosition, setTextPosition] = useState("");
  const [error, setError] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let erros = "";
    if (textOrder === "") {
      if (/(^[a-zA-Z0-9]{8}$)/.test(data)) {
        setTextOrder(data);
      } else if (data.length < 8) {
        erros += "\n.) Bar code length of Order should be equil to 8 not less.";
        Vibration.vibrate();
      } else if (data.length > 8) {
        erros +=
          "\n.) Bar code length of Order should be equil to 8 not greather.";
        Vibration.vibrate();
      } else {
        erros +=
          "\n.) Bar code of Order should contain only numeric and alphanumeric values.";
        Vibration.vibrate();
      }
    }

    if (textPosition === "") {
      if (/(^[0-9]{5}$)/.test(data)) {
        setTextPosition(data);
        setError("");
      } else if (data.length < 5) {
        erros +=
          "\n.) Bar code length of Position should be equil to 5 not less.";
        Vibration.vibrate();
      } else if (data.length > 5) {
        erros +=
          "\n.) Bar code length of Position should be equil to 5 not greather.";
        Vibration.vibrate();
      } else {
        erros +=
          "\n.) Bar code of Position should contain only numeric values.";

        Vibration.vibrate();
      }
    }

    setError(erros);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.app}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.app}>
        <Text style={{ margin: 10 }}>No access to camera</Text>;
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.app}>
        {Header()}

        <View style={styles.appcontainer}>
          <View style={styles.textbox}>
            <Text>Order : </Text>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                padding: 10,
                color:"green",
              }}
              value={textOrder}
            />
          </View>

          <View style={styles.textbox}>
            <Text>Position : </Text>
            <TextInput
              style={{
                height: 40,

                borderWidth: 1,
                padding: 10,
                color: "green",
              }}
              value={textPosition}
            />
          </View>

          <Text style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
            {error}
          </Text>

          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
   
           {textOrder !=="" && textPosition!=="" ? (
            <Button
              title="Try again ?"
              onPress={() => {
                setScanned(false);
                setTextOrder("");
                setTextPosition("");
              }}
            />
          ) :        scanned && (
            <Button
              title="Scan again ?"
              onPress={() => {
                setScanned(false);
                setError("");
              }}
            />
          )}
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    display: "flex",
  },
  header: {
    height: 50,
  },
  headercontainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
  },
  headertext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appcontainer: {
    display: "flex",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textbox: {
    padding: 20,
    width: "100%",
  },
  barcodebox: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
});
