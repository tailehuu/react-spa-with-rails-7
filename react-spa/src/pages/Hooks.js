import HookRef from "../components/HookRef";
import TodosReducer from "../components/TodosReducer";
import TodoCallback from "../components/TodoCallback";
import TodosMemo from "../components/TodosMemo";
import CustomHook from "../components/CustomHook";

const Hooks = () => {
  return (
    <>
      <h1>Hooks Example</h1>

      <HookRef />

      <TodosReducer />

      <TodoCallback />

      <TodosMemo />

      <CustomHook />
    </>
  )
}

export default Hooks
