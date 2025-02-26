import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase"; // Importa Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";



const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Usuario deslogueado correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
