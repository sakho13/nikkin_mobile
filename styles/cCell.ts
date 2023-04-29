import { StyleSheet } from "react-native"
import { cBorder } from "./cBoder"

export const cCell = StyleSheet.create({
  main: {
    ...cBorder.main,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
})
