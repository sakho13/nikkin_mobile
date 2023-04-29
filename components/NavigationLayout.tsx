import { View } from "react-native"

type Props = {
  children: JSX.Element
}

export default function NavigationLayout({ children }: Props) {
  return (
    <View>
      {children}

      <View>
        <p>ナビ</p>
      </View>
    </View>
  )
}
