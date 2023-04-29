import { Dispatch, SetStateAction, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from "react-native"
import { cBorder } from "../../styles/cBoder"

type Props = {
  state: [string, Dispatch<SetStateAction<string>>]
  label?: string
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
}

export default function BasicTextInput({
  state: [text, setText],
  label,
  placeholder,
  keyboardType = "default",
}: Props) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        placeholderTextColor={"#999999"}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 4,
  },
  label: {
    paddingLeft: 10,
  },
  input: {
    ...cBorder.main,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
})
