"use client";
import axios from "axios";
import { User, columns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AsideMenu } from "@/components/AsideMenu";
import Header from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import MemberCard from "@/components/MemberCard";
import { UserProvider, useUser } from "@/context/UserContext";

const fetchUsers = async (token: string, user: any) => {
  try {
    if (!user || !user.role) {
      console.error("User data is missing or role is not defined");
    }

    let endpoint = "http://localhost:3005/users"; // Default endpoint

    // Conditional logic based on user role and classes
    if (user.role === "teacher") {
      endpoint = `http://localhost:3005/teachers/${user.id}/classes`;
    } else if (user.role === "student") {
      endpoint = `http://localhost:3005/students/${user.id}/classes`;
    }

    // Make the GET request with Axios, including the token in the headers
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`, // JWT token in the headers
      },
      withCredentials: true,
    });

    return response.data; // Return the data (classes or users) based on the role
  } catch (error) {
    console.error("Error fetching data:", error);
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
  const { user } = useUser(); // Obtener el user desde el contexto
  const [data, setData] = useState<User[]>([]); // Estado para guardar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Verificar si el usuario está disponible antes de hacer la petición
    if (!user) {
      setError("User not authenticated");
      setLoading(false);
      return; // Exit early if user is not available
    }

    const token = Cookies.get("token"); // Obtener el token JWT de las cookies
    if (!token) {
      setError("Authentication token is missing");
      setLoading(false);
      return; // Exit early if token is not available
    }

    // Llamar directamente a la función fetchUsers
    const fetchData = async () => {
      try {
        const users = await fetchUsers(token, user); // Fetch the users based on token and user
        setData(users); // Guardar los usuarios en el estado
      } catch (error) {
        setError("Error fetching users, please try again later");
        console.log(error); // Manejar el error
      } finally {
        setLoading(false); // Quitar el loading después de la petición
      }
    };

    fetchData(); // Ejecutar la función de fetch cuando el componente se monte
  }, [user]); // Dependencia para ejecutar solo cuando el usuario esté disponible // Dependencia para ejecutar solo cuando el usuario esté disponible

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
