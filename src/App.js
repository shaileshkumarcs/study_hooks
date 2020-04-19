import React from "react";
import "./App.css";
import ReducerHookCounterOne from "./components/Hooks/ReducerHookCounterOne";
import ReducerHookCounterTwo from "./components/Hooks/ReducerHookCounterTwo";
import ReducerHookCounterThree from "./components/Hooks/ReducerHookCounterThree";
// import ComponentC from "./components/Hooks/ComponentC";
// import MouseContainer from "./components/Hooks/MouseContainer";
// import IntervalClassCounter from "./components/Hooks/IntervalClassCounter";
// import IntervalHookCounter from "./components/Hooks/IntervalHookCounter";
// import DataFatching from "./components/Hooks/DataFatching";
// import ClassMouse from "./components/Hooks/ClassMouse";
// import HookMouse from "./components/Hooks/HookMouse";
// import ClassCounterOne from "./components/Hooks/ClassCounterOne";
// import HookCounterOne from "./components/Hooks/HookCounterOne";
// import HookCounterThree from "./components/Hooks/HookCounterThree";
// import HookCounterFour from "./components/Hooks/HookCounterFour";
// import MyForm from "./components/FiledArray/MyForm";
// import MyTable from "./components/FiledArray/MyTable";
// import ClassMyForm from "./components/FiledArray/ClassMyForm";
// import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
// import ClassCounter from "./components/Hooks/ClassCounter";
// import HookCounter from "./components/Hooks/HookCounter";
// import HooksCounterTwo from "./components/Hooks/HooksCounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ReducerHookCounterThree />
      {/* <ReducerHookCounterTwo /> */}
      {/* <ReducerHookCounterOne /> */}
      {/* <UserContext.Provider value={"Shailesh"}>
        <ChannelContext.Provider value={"Nutantech"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFatching /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/*<HookCounterFour />*/}
      {/* <HookCounterThree /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/*-------- Extra study Above--------- */}
      {/* <SidebarMenu /> */}
      {/* <MyForm /> */}
      {/* <ClassMyForm /> */}
      {/* <MyTable /> */}
    </div>
  );
}

export default App;
