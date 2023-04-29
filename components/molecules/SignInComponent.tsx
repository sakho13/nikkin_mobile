import { StyleSheet, Text, View, TextInput } from "react-native"
import BasicTextInput from "../atoms/BasicTextInput"
import { useState } from "react"
import BasicTextButton from "../atoms/BasicTextButton"

export default function SignInComponent() {
  const email = useState("")
  const password = useState("")

  const signIn = () => {
    // validation
    // auth
    // transition
  }

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

      <BasicTextButton text='ログイン' onPress={() => {}} />
    </View>
  )
}
