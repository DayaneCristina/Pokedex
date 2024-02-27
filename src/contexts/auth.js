import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const baseURL = 'http://localhost:3333/api/';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");

    if (userToken !== null) {
      setUser(true)
    }
  });

  const signin = async (email, password) => {
    const login = await fetch(`${baseURL}auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (login.status == 401) {
      return 'Login / Senha incorretos'
    }

    const response = await login.json()
    localStorage.setItem("jwt", response.access_token)

    setUser(true)
  };

  const signup = async (name, email, password) => {
    const response = await fetch(`${baseURL}auth/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })

    return response.status;
  };

  const signout = async () => {

    await fetch(`${baseURL}auth/logout`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })

    setUser(false);
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
