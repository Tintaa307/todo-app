import { Header } from "./components/Header"
import { Todos } from "./components/Todos"
import { useTodos } from "./hooks/useTodos"

const App: React.FC = () => {
  const {
    handleCompleted,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos()

  return (
    <>
      <div className="todoapp">
        <Header saveTodo={handleSave} />
        <Todos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          todos={filteredTodos}
        />
      </div>
    </>
  )
}

export default App
