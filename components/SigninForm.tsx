import { View, StyleSheet, Text, Button } from "react-native"
import { cBorder } from "../styles/cBoder"
import { useState } from "react"
import SignInComponent from "./molecules/SignInComponent"
import SignUpComponent from "./molecules/SignUpComponent"

type TabKeys = "signin" | "signup"
type TabType = {
  [key in TabKeys]: () => JSX.Element
}

export default function SigninForm() {
  const [selectedTab, setSelectedTab] = useState<TabKeys>("signin")

  const tabForm: TabType = {
    signin: SignInComponent,
    signup: SignUpComponent,
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.tab_bar}>
          <Text
            onPress={() => {
              setSelectedTab("signin")
            }}
            style={{
              fontWeight: selectedTab === "signin" ? "900" : "normal",
            }}
          >
            ログイン
          </Text>
          <Text
            onPress={() => {
              setSelectedTab("signup")
            }}
            style={{ fontWeight: selectedTab === "signup" ? "900" : "normal" }}
          >
            新規登録
          </Text>
        </View>

        <View style={styles.form_main}>{tabForm[selectedTab]()}</View>
      </View>

      <View style={styles.sns_container}>
        {/* SNS用 */}
        <p>apple</p>
        <p>google</p>
        <p>twitter</p>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "75%",
    minWidth: 200,
  },
  form: {
    ...cBorder.main,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tab_bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 10,

    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "var(--border-light)",
  },
  form_main: {
    paddingTop: 10,
    height: 220,
  },

  sns_container: {
    display: "flex",
  },
})
