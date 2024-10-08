import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Define la interfaz para el contexto del usuario
interface UserContextType {
  user: any; // Cambia esto al tipo correcto si tienes más detalles sobre la estructura de `user`
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

// Crear el contexto de usuario con un valor inicial `undefined`
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook para acceder al contexto de usuario
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};

// Proveedor del contexto de usuario
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Inicializa como null o con un objeto vacío

  useEffect(() => {
    // Cargar los datos del usuario cuando se monta el componente
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3005/profile", {
          withCredentials: true,
        });
        setUser(response.data.user); // Asigna los datos del usuario
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
