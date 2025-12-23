import AppleAuthButton from "@/src/components/AppleAuthButton";
import GoogleAuthButton from "@/src/components/GoogleAuthButton";
import { fonts } from "@/src/constants/theme";
import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function SignIn() {
  function openWebBrowser() {
    Linking.openURL("https://hasnain-portfolio-mocha.vercel.app");
  }

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScroolContainer}></View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.brandLogo}
          source={require("@/assets/images/wolt-logo.png")}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagLine}>
          Almost Everything delivered
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(200)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(100)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>Please Vist</Text>
          <Text style={styles.privacyLink} onPress={openWebBrowser}>
            Wolt Privacy statement
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagLine: {
    fontSize: 30,
    fontFamily: fonts.regular,
    textAlign: "center",
    marginBottom: 50,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: { color: "#666", fontSize: 16, fontWeight: "600" },
  buttonContainer: { gap: 12, width: "100%" },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  },
  infiniteScroolContainer: {
    flex: 0.8,
  },
});
