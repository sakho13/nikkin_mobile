import { useState } from "react"
import { StyleSheet, Text, View, Modal } from "react-native"
import { Todo } from "../types/todo"
import TodoComponent from "../components/TodoComponent"
import { FAB } from "@react-native-material/core"
import { Ionicons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import CreateTodoModal from "../components/modals/CreateTodoModal"

export default function TodoScreen() {
  const [openCreateTodoModal, setOpenCreateTodoModal] = useState(true)
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "sample1",
      content: "sample1",
      done: false,
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      id: "sample2",
      content: "sample2",
      done: false,
      createdAt: new Date(),
      deadline: new Date(),
    },
  ])

  return (
    <View style={styles.container}>
      <View>
        {todos.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </View>

      <FAB
        style={{
          width: "fit-content",
          height: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={({ color, size }) => (
          <Entypo name='plus' color={color} size={size} />
        )}
        onTouchStart={(event) => {
          setOpenCreateTodoModal(true)
        }}
      />

      <Modal animationType='slide' visible={openCreateTodoModal}>
        <CreateTodoModal onClose={() => setOpenCreateTodoModal(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: "5%",
    flex: 1,
  },
})
