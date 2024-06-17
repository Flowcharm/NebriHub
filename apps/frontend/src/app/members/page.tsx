"use client";
import axios from 'axios';
import { User, columns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import {AsideMenu} from "@/components/AsideMenu";
import Header from "@/components/Header";
import {TooltipProvider} from "@/components/ui/tooltip";
import MemberCard from "@/components/MemberCard"; // Usa js-cookie para obtener cookies

const fetchUsers = async () => {
    try {
        const token = Cookies.get('token');
        if (!token) {
            throw (Error('Authentication token is missing'));
        }
        const response = await axios.get('http://localhost:3005/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // Asegúrate de que las cookies se envían con la solicitud
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export default function Members() {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <TooltipProvider>
                <Header />
                <AsideMenu />
            </TooltipProvider>
            <div className="flex mr-9">
                <MembersComponent />
                <MemberCard />
            </div>
        </div>
    )
}

export function MembersComponent() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const users = await fetchUsers();
                setData(users);
            } catch (error) {
                // Handle the error appropriately, maybe redirect to login if unauthorized
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
