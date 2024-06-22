import { createContext, useContext, useReducer } from "react";
import { AuthAction, AuthContextProps, AuthInitialStateProps, AuthProviderProps } from "../types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const INITIAL_STATE: AuthInitialStateProps = {
  user: null,
  isAuthenticated: true,
};

function reducer(state: AuthInitialStateProps, action: AuthAction) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }: AuthProviderProps) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, INITIAL_STATE);

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
