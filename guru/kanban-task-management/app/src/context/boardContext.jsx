import { useState } from "react";
import { createContext } from "react";
import { useContext, useReducer } from "react";
import data from "../data";


const BoardContext = createContext();


const BoardContextProvider = ({ children }) => {
  const [appData, setAppData] = useState(data);

  const values = { appData, setAppData };
  return (
    <BoardContext.Provider value={values} >
      {children}
    </BoardContext.Provider>
  )
}


export const useBoardContext = () => {
  const context = useContext(BoardContext);
  return context;
}

export default BoardContextProvider;