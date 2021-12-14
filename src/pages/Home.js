import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components/Buttons";

export default function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Tamires</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        //Toda vez que o texto mudar o que foi digitado será passado a função setNewSkill mudando o estado da newSkill
        onChangeText={setNewSkill}
      />

      <Button />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {mySkills.map((skill) => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1F1e25",
    color: "#FFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },

  buttonSkill: {
    backgroundColor: "#1F1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
