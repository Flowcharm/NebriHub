"use client";

import * as React from "react";
import Link from "next/link";
import {
  CalendarDays,
  Home,
  LineChart,
  PanelsTopLeft,
  Settings,
  Users2,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Calendar from "@/components/FullCalendar";
import { UserProvider } from "@/context/UserContext";
export default function Dashboard() {
  return (
    <TooltipProvider>
      <DashboardComponent />
    </TooltipProvider>
  );
}

export function DashboardComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <UserProvider>
      <div className="bg-muted/40 flex min-h-screen w-full flex-col">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link href="/dashboard">
              <div
                className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-lg text-lg font-semibold md:h-8 md:w-8 md:text-base ${
                  pathName === "/dashboard"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground transition-colors hover:text-foreground"
                }`}
              >
                <Home
                  className={`h-4 w-4 transition-all group-hover:scale-110 ${
                    pathName === "/dashboard" ? "text-primary-foreground" : ""
                  }`}
                />
                <span className="sr-only">NebriHub</span>
              </div>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/calendar">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/calendar"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <CalendarDays className="h-5 w-5" />
                    <span className="sr-only">Calendario</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Calendario</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/projects">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/projects"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <PanelsTopLeft className="h-5 w-5" />
                    <span className="sr-only">Proyectos</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Proyectos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/attendance">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/attendance"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <School className="h-5 w-5" />
                    <span className="sr-only">Asistencia</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Asistencia</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/members">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/members"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Miembros</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Miembros</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/statistics">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/statistics"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Estadísticas</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Estadísticas</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/settings">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      pathName === "/settings"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }`}
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Configuración</span>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configuración</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          <main className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <Card className="w-full">
              <CardHeader className="pb-3">
                <CardTitle>Tus profesores</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Aquí aparecerán los profesores a los que asignar las clases a
                  impartir.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Añadir un profesor</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Añadir un profesor a tu espacio
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        En tu espacio tendrás a los profesores que quieras
                        coordinar, también verás sus horas por semana y las
                        horas asignadas hasta ahora. Aún así, podrás hacerlo
                        también en la sección
                        <Link
                          className="font-bold text-primary"
                          href="/members"
                        >
                          {" "}
                          miembros
                        </Link>
                        .
                        <Select>
                          <SelectTrigger className="w-[380px] mt-2">
                            <SelectValue placeholder="-- Elige el profesor --" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={" "}>
                              Francisco Albiar
                            </SelectItem>
                            <SelectItem value={" "}>
                              Jose Carlos Ramirez
                            </SelectItem>
                            <SelectItem value={" "}>Elvira Pérez</SelectItem>
                          </SelectContent>
                        </Select>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader className="pb-3">
                <CardTitle>Tus clases</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Aquí aparecerán las clases que personalmente, {/*nombreUser*/}
                  , tienes que impartir.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Añadir nueva clase</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader className="pb-3">
                <CardTitle>Tus alumnos</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Aquí aparecerán los alumnos a los que asignar tareas,
                  proyectos y demás trabajos.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Añadir nuevo profesor</Button>
              </CardFooter>
            </Card>
            <div className="lg:col-span-2 xl:col-span-2">
              <Calendar />
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
