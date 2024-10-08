"use client";
import axios from "axios";
import { User, columns } from "./columns"; // Asegúrate que `User` esté correctamente definido para reflejar la estructura que recibes de la API
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AsideMenu } from "@/components/AsideMenu";
import Header from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import MemberCard from "@/components/MemberCard";
import { UserProvider } from "@/context/UserContext";

// Función para hacer el fetch de los usuarios desde la API
const fetchUsers = async () => {
  try {
    const token = Cookies.get("token"); // Obtener el token JWT de las cookies
    if (!token) {
      throw new Error("Authentication token is missing");
    }
    // Hacer la petición GET con Axios, incluyendo el token en los headers
    const response = await axios.get("http://localhost:3005/users", {
      headers: {
        Authorization: `Bearer ${token}`, // Token JWT en los headers
      },
      withCredentials: true,
    });
    return response.data; // Retorna los datos de los usuarios
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Componente principal de "Members"
export default function Members() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <UserProvider>
        <TooltipProvider>
          <Header />
          <AsideMenu />
        </TooltipProvider>
        <div className="flex mr-9">
          <MembersComponent />
          <MemberCard />
        </div>
      </UserProvider>
    </div>
  );
}

// Componente para mostrar la lista de usuarios
export function MembersComponent() {
  const [data, setData] = useState<User[]>([]); // Estado para guardar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Función que hará el fetch de los datos cuando el componente se monte
    const getData = async () => {
      try {
        const users = await fetchUsers(); // Llamar a la función que hace la petición a la API
        setData(users); // Guardar los usuarios en el estado
      } catch (error) {
        setError("Error fetching users, please try again later"); // Manejar el error
      } finally {
        setLoading(false); // Quitar el loading después de la petición
      }
    };

    getData(); // Ejecutar la función de fetch cuando el componente se monte
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Mostrar mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Mostrar mensaje de error si la petición falló
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />{" "}
      {/* Renderizar la tabla con los datos obtenidos */}
    </div>
  );
}
