import { View, Text } from "react-native"
import { Todo } from "../types/todo"

type Props = {
  todo: Todo
}

export default function TodoComponent({ todo }: Props) {
  return (
    <View>
      <Text>{todo.content}</Text>
    </View>
  )
}
