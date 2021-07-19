import React, { useReducer } from "react";
import { initialState, Reducer } from "./reducer";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export function useAppState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useState must be used within a Provider");
  }

  return context;
}

export function useAppDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a Provider");
  }

  return context;
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
