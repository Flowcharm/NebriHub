import { AsideMenu } from '@/components/AsideMenu';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/Header';
import {ProjectsComponent} from "@/app/projects/page";
import {DataTable} from "@/app/members/data-table";
import {columns} from "@/app/members/columns";
import {Grid} from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as React from 'react';

interface AttendanceProps {
    type: string;
}

const userType = "";

export default function Attendance() {
  return (
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-muted/40">
          <TooltipProvider>
              <Header/>
              <AsideMenu/>
          </TooltipProvider>
          <div className="flex mr-9">
              <AttendanceComponent type={userType}/>
          </div>
      </div>
  );
}

export function AttendanceComponent({ type }: AttendanceProps) {
  return (
    <div className="ml-4 sm:ml-10 mt-4 sm:mt-20 lg:mt-0">
      <p className="text-4xl font-bold">Asistencia</p>
      <p className="leading-relaxed text-muted-foreground mr-4 sm:mr-10 mt-1">
        La sección de asistencias permite controlar el absentismo y se divide
        por tantas clases como tu institución tenga. Más abajo puedes controlar
        la asistencia por clase. Sólo verás aquellas a las que tengas acceso.
      </p>
      <div className="grid gap-4 mt-8 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="pb-3">
              <CardTitle>1º DAM G2</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Aquí aparecerán los profesores a los que asignar las clases a impartir.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Añadir un profesor</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Añadir un profesor a tu espacio</AlertDialogTitle>
                    <AlertDialogDescription>
                      En tu espacio tendrás a los profesores que quieras coordinar, también
                      verás sus horas por semana y las horas asignadas hasta ahora. Aún así,
                      podrás hacerlo también en la sección
                      <Link className="font-bold text-primary" href="/members"> miembros</Link>.
                      <Select>
                        <SelectTrigger className="w-[380px] mt-2">
                          <SelectValue placeholder="-- Elige el profesor --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Francisco Albiar">Francisco Albiar</SelectItem>
                          <SelectItem value="Antonio Cardador">Antonio Cardador</SelectItem>
                          <SelectItem value="Elvira Hernández">Elvira Hernández</SelectItem>
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
        ))}
      </div>
    </div>
  );
}