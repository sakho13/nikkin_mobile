import { StyleSheet, Text, View, TextInput } from "react-native"
import BasicTextInput from "../atoms/BasicTextInput"
import { useState } from "react"

export default function SignUpComponent() {
  const email = useState("")
  const password = useState("")
  const checkPassword = useState("")

  return (
    <View>
      <BasicTextInput
        state={email}
        label='メールアドレス'
        placeholder='suzuki_taro@example.hoge'
      />
      <BasicTextInput
        state={password}
        label='パスワード'
        placeholder='p@ssword'
      />
      <BasicTextInput
        state={checkPassword}
        label='パスワード（確認用）'
        placeholder='p@ssword'
      />
    </View>
  )
}
