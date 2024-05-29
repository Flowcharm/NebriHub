'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Login() {
  const [selectedLocale, setSelectedLocale] = useState("🇪🇸 Español");

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
  };

  return (
      <div className="relative w-full lg:grid xl:min-h-[820px] lg:min-h-[600px] lg:grid-cols-2">
        <div className="absolute top-5 left-7 p-4 text-sm">
          <span>Idioma: </span>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground">
              {selectedLocale}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleLocaleChange("🇪🇸 Español")}>
                🇪🇸 Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLocaleChange("🇬🇧 English")}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLocaleChange("🇮🇹 Italiano")}>
                🇮🇹 Italiano
              </DropdownMenuItem>
            </DropdownMenuContent>

          </DropdownMenu>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Inicio de sesión</h1>
              <p className="text-balance text-muted-foreground">
                Introduce tu correo electrónico corporativo más abajo.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="nebrija@nebrija.com"
                    required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
              <Button variant="outline" className="w-full">
                Iniciar sesión con Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link href="/register/" className="underline">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
              src="/login-cover.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
);
}
