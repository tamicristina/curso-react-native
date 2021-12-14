import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button() {
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.7}
    // onPress={handleAddNewSkill}
  >
    <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370f7",
    padding: 20,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
