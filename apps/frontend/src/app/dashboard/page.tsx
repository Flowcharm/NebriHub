import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  CalendarDays,
  Home,
  LineChart,
  PanelsTopLeft,
  Settings,
  Users2,
  Search,
  PanelLeft, School,
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@/components/ui/tooltip';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AvatarIcon } from '@radix-ui/react-icons';
import { router } from 'next/client';

export default function Dashboard() {
  return (
    <TooltipProvider>
      <DashboardComponent />
    </TooltipProvider>
  );
}

export function DashboardComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
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
                href="/projects"
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
                href="#"
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
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configuración</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configuración</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Home className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">NebriCalendar</span>
                </Link>
                <Link
                  href="/calendar"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <CalendarDays className="h-5 w-5" />
                  Calendario
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <PanelsTopLeft className="h-5 w-5" />
                  Proyectos
                </Link>
                <Link
                  href="/members"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Miembros
                </Link>
                <Link
                  href="/attendance"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <School className="h-5 w-5" />
                  Asistencia
                </Link>
                <Link
                  href="/statistics"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Estadísticas
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Configuración
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Instituto Nebrija</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/example_pfp.jpeg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{/*UserName*/}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>Ayuda</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <Card className="w-full">
            <CardHeader className="pb-3">
              <CardTitle>Tus profesores</CardTitle>
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
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader className="pb-3">
              <CardTitle>Tus clases</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Aquí aparecerán las clases que personalmente, {/*nombreUser*/},
                tienes que impartir.
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
                Aquí aparecerán los alumnos a los que asignar tareas, proyectos y demás
                trabajos.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Añadir nuevo profesor</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader className="pb-3">
              <CardTitle>Tus profesores</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                <AvatarIcon />
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Añadir nuevo profesor</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
