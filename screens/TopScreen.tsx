import { StyleSheet, Text, View, TextInput } from "react-native"
import { useState } from "react"
import { cBorder } from "../styles/cBoder"
import { cCell } from "../styles/cCell"
import SigninForm from "../components/SigninForm"

export default function TopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NikkiN</Text>

      <SigninForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Lora",
  },
})
