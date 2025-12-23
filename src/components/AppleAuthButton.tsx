import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppleAuthButton() {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-apple" size={18} color={"#fff"} />
      <Text style={styles.googleButtonText}> Sign in with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
