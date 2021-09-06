import { myInfo } from "../types/user";
import {Dispatch, Context, createContext, useReducer, Reducer} from "react";

type stateType = {
  user: myInfo | undefined
}

type actionType = |
  {
    type: "set"
    newData: myInfo
  }

type UserContext =  {
  userState: stateType
  userDispatch: Dispatch<actionType>
}


const reducer: Reducer<stateType, actionType> = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "set":
      return { user: action.newData }
    default:
      return state
  }
}

type useUserStateType = () => {
  userState: stateType,
  userDispatch: Dispatch<actionType>
}

export const useUserSD: useUserStateType = () => {
  const [userState, userDispatch] = useReducer(reducer, {user: undefined})
  return {userState, userDispatch}
}

export const userContext:Context<UserContext> = createContext<UserContext>({
  userState: {
    user: undefined
  },
  userDispatch: () => {}
})
