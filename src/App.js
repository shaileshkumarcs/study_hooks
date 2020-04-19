import React from "react";
import "./App.css";
import ParentComponent from "./components/Hooks/CallbackHook/ParentComponent";
import Counter from "./components/Hooks/MemoHook/Counter";
import FocusInput from "./components/Hooks/UseRef/FocusInput";
import ClassTimer from "./components/Hooks/UseRef/ClassTimer";
import HookTimer from "./components/Hooks/UseRef/HookTimer";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
