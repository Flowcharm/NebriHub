"use client";

import { useState, FormEvent } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, RectangleEllipsis } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Separator } from "@/components/ui/separator"

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setMessage('Login start');
      await axios.post('http://localhost:3005/auth/login', { email, password }, { withCredentials: true });
      setMessage('Login successful');
      router.push('/dashboard');
    } catch (error: any) {
      setMessage(`Login failed: ${error.response?.data?.message || 'An error occurred'}`);
    }
  };

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Inicio de sesión</h1>
        <p className="text-balance text-muted-foreground">
          Introduce tu correo electrónico corporativo más abajo.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex">
            <Label htmlFor="email">Correo electrónico</Label>
            <Mail className="ml-2 h-3.5 w-3.5" />
          </div>
          <Input
            id="email"
            type="email"
            placeholder="pedrogarcia@tuinstituto.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <div className="flex">
              <Label htmlFor="password">Contraseña</Label>
              <RectangleEllipsis className="ml-2 h-4 w-4.5" />
            </div>
            <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
        <Separator />
        <div className="flex justify-around">
          <Button variant="outline" className="w-[160px]">
            Continuar con
            <Image
              src="/google.webp"
              width={15}
              height={15}
              alt="Google Logo"
              className="m-1"
            />
          </Button>
          <Button variant="outline" className="w-[160px]">
            Continuar con
            <Image
              src="/microsoft.png"
              width={20}
              height={20}
              alt="Microsoft Logo"
              className="mr-1"
            />
          </Button>
        </div>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
      <div className="mt-4 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/register-student" className="underline">
          Registrarse
        </Link>
      </div>
    </>
  );
}
