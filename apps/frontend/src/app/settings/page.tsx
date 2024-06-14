"use client";

import Link from "next/link"
import {
  CalendarDays,
  Home,
  LineChart,
  PanelsTopLeft,
  Settings,
  Users2,
} from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';

export default function SettingsPage() {
  return (
    <TooltipProvider>
      <SettingsComponent/> {/* Add the children to make it reusable */}
    </TooltipProvider>
  );
}

export function SettingsComponent() {
  const [userStatus, setUserStatus] = useState<string>('');

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="/dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <Home className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">NebriCalendar</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/calendar"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <CalendarDays className="h-5 w-5" />
                <span className="sr-only">Calendario</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Calendario</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/tasks"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <PanelsTopLeft className="h-5 w-5" />
                <span className="sr-only">Proyectos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Proyectos</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/members"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Miembros</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Miembros</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/statistics"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Estadísticas</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Estadísticas</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/settings"
                className="group flex h-2 w-2 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Settings className="h-5 w-5"/>
                <span className="sr-only">Configuración</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configuración</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <main
        className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Configuración</h1>
        </div>
        <div
          className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              Personal
            </Link>
            <Link href="#">Seguridad</Link>
            <Link href="#">Organización</Link>
            <Link href="#">Apariencia</Link>
            <Link href="#">Avanzado</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Perfil</CardTitle>
                <CardDescription>
                  Esta es la parte pública de tu cuenta, tanto a coordinadores,
                  alumnos como a profesores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex justify-around mb-2">
                    <div>
                      <Label className="text-gray-800">Nombre</Label>
                      <Input className="" placeholder={/*userName*/ "Pedro"} />
                    </div>
                    <div>
                      <Label className="text-gray-800">Apellidos</Label>
                      <Input className="" placeholder={/*userName*/ "García"} />
                    </div>
                  </div>
                    <Separator />
                  <Label className="text-gray-800">Nombre de usuario</Label>
                  <Input className="mb-2" placeholder={/*userName*/ "pedrxgarcia"} />
                  <Label className="text-gray-800">Estado</Label>
                  <div className="flex justify-between">
                    <Textarea
                      placeholder={/*currentStatus*/ 'Pon aquí tu estado!'}
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)} />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Actualizar</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Mis clases</CardTitle>
                <CardDescription>
                  {
                    /*TextoPersonalizado Alumno / Profesor / Coordinador */
                    "En esta sección se encuentran todas las clases que organizas. \n" +
                    "También se encuentran las clases que asignas a otros profesores." /*Coordinador*/
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
