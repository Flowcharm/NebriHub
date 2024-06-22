"use client";

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import GeneralSelect from "./GeneralSelect";

export default function SignUpForm({ userType }: { userType: string }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [institution, setInstitution] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3005/auth/register', {
        email,
        password,
        firstName,
        lastName,
        institution,
      }, { withCredentials: true });
      setMessage('Registration successful');
      router.push('/verify-institution');
    } catch (error: any) {
      setMessage(`Registration failed: ${error.response?.data?.message || 'An error occurred'}`);
    }
  };

  const oppositeUserType = userType === 'profesor' ? 'estudiante' : 'profesor';
  const oppositeUserTypeUrl = userType === 'profesor' ? '/register-student' : '/register-teacher';

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Registro de {userType}</h1>
        <p className="text-balance text-muted-foreground">
          Introduce tus datos más abajo para crear una cuenta NebriCalendar.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">Nombre</Label>
            <Input
              id="first-name"
              placeholder="Pedro"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Apellidos</Label>
            <Input
              id="last-name"
              placeholder="García"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
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
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <GeneralSelect type={"institutions"} onSelect={setInstitution} size={"large"} usingLabel={true}/>
        <Button type="submit" className="w-full">
          Crear cuenta
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
        ¿Ya tienes una cuenta?{" "}
        <Link href={"/login"} className="underline">
          Iniciar sesión
        </Link>
      </div>
      <div className="text-center text-sm -mt-2">
        ¿Eres un {oppositeUserType}?{" "}
        <Link href={oppositeUserTypeUrl} className="underline">
          Registrarse como {oppositeUserType}
        </Link>
      </div>
    </>
  );
}
