import { Text } from "react-native"
import { cBorder } from "../../styles/cBoder"

type Props = {
  text: string
  onPress: () => void
}

export default function BasicTextButton({ text, onPress }: Props) {
  return (
    <Text
      onPress={onPress}
      style={{
        ...cBorder.main,
      }}
    >
      {text}
    </Text>
  )
}
