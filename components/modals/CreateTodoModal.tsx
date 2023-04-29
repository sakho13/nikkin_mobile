import { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { Todo } from "../../types/todo"
import BasicTextInput from "../atoms/BasicTextInput"

type Props = {
  onClose: () => void
}

export default function CreateTodoModal({ onClose }: Props) {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: "",
    content: "",
    done: false,
    createdAt: new Date(),
    deadline: new Date(),
  })

  const todoText = useState("")

  const createNewTodo = () => {
    //
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Create New Todo</Text>

        <View>
          <BasicTextInput state={todoText} placeholder='新しいToDo' />
        </View>

        <View>
          <Button title='Create' />
          <Button title='Cancel' onPress={onClose} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "#9d9d9d91",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    zIndex: 10,
    // backgroundColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    // shadowColor: "#000",
    width: 200,
    padding: 5,
  },
})
