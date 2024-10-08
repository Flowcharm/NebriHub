"use client";
import { AsideMenu } from "@/components/AsideMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import GeneralSelect from "@/components/GeneralSelect";
import ButtonGroup from "@/components/IconButtonGroup";
import { Book, LibraryBig, SquareUserRound } from "lucide-react";
import Image from "next/image";
import { UserProvider } from "@/context/UserContext";

interface AttendanceProps {
  type: string;
}

const userType: string = "";

export default function Attendance() {
  return (
    <UserProvider>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-muted/40">
        <TooltipProvider>
          <Header />
          <AsideMenu />
        </TooltipProvider>
        <div className="flex mr-9">
          <AttendanceComponent type={userType} />
        </div>
      </div>
    </UserProvider>
  );
}

export function AttendanceComponent({ type }: AttendanceProps) {
  const [newClassName, setNewClassName] = useState<string>("");

  return (
    <div className="ml-6 mt-5 sm:text-left sm:ml-9 lg:ml-10 lg:mt-4 md:ml-10">
      <p className="text-4xl font-bold">Asistencia</p>
      <div className="flex">
        <p className="leading-relaxed text-muted-foreground mr-4 sm:mr-10 mt-1">
          La sección de asistencias permite controlar el absentismo y se divide
          por tantas clases como tu institución tenga. Abajo puedes controlar la
          asistencia de las clases que tengas asignadas.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="mt-1">Nueva clase</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Crear una nueva clase</AlertDialogTitle>
              <AlertDialogDescription>
                Las clases que crees aquí serán públicas para todos aquellos a
                los que des acceso. El coordinador y administradores de la
                plataforma ven todas las clases creadas aún sin tenerlas
                asignadas.
                <div className="my-3">
                  <Label className="text-gray-900">Nombre de la clase</Label>
                  <Input
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    required
                  />
                </div>
                <GeneralSelect
                  type={"teachers"}
                  size={"large"}
                  usingLabel={true}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="grid gap-4 mt-8 text-left md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {[...Array(12)].map((_, index) => (
          <Card
            key={index}
            className="relative w-full flex rounded-lg overflow-hidden"
          >
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <CardHeader className="flex pb-3">
                <CardTitle className="text-xl">
                  <TooltipProvider>
                    <Tooltip delayDuration={750}>
                      <TooltipTrigger>{"Nombre de la clase"}</TooltipTrigger>
                      <TooltipContent>
                        <p className="">
                          {" "}
                          {
                            "1º Desarrollo de Aplicaciones Multiplataforma Grupo 2"
                          }{" "}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex gap-2 items-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <LibraryBig className="h-5 w-5" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Asignatura</p>
                      </TooltipContent>
                    </Tooltip>
                    <p>
                      {
                        <Link href={"/subjects/bases_de_datos"}>
                          Bases de Datos
                        </Link>
                      }
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SquareUserRound className="h-5 w-5" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Profesor/a</p>
                      </TooltipContent>
                    </Tooltip>
                    <p>
                      {
                        <Link href={"/teachers/Antonio_Otero"}>
                          Antonio Otero
                        </Link>
                      }
                    </p>
                  </div>
                </TooltipProvider>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Acceder</Button>
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
                            <SelectItem value="Francisco Albiar">
                              Francisco Albiar
                            </SelectItem>
                            <SelectItem value="Elvira Hernández">
                              Elvira Hernández
                            </SelectItem>
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
            </div>

            <div className="relative w-1/3 h-full overflow-hidden">
              <Image
                src="/login-cover.jpg"
                alt="Descripción de la imagen"
                fill
                className="object-cover object-center"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
