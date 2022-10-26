import React, { useRef, useEffect } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const move = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.timing(move, {
      toValue: 350,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const restart = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const stop = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  // useEffect(() => {
  //   Animated.timing(move, {
  //     toValue: 300,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [move]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.top,
            {
              translateX: move,
            },
          ]}
        >
          <Ionicons name="airplane-outline" size={24} color="black" />
        </Animated.View>

        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Text style={styles.fadingText}>
            welcome to Animation React Native
          </Text>
        </Animated.View>
        <View style={styles.button}>
          <Button title="Start" onPress={start} />
          <Button title="Stop" />
          <Button title="Resest" onPress={restart} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  top: {
    flex: 1,

    justifyContent: "flex-start",
  },

  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
});

export default App;
