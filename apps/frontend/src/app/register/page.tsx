import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input"

export default function Register() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">
            <div className="absolute -inset-3 bg-cover bg-center filter blur-md" style={{ backgroundImage: 'url(/login-cover.jpg)' }}></div>
            <div className="relative z-10">
                <Card className="mx-auto max-w-sm bg-zinc-50">
                    <CardHeader>
                        <CardTitle className="text-xl">Registro</CardTitle>
                        <CardDescription>
                            Introduce la siguiente información para crear tu cuenta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">Nombre</Label>
                                    <Input id="first-name" placeholder="Antonio" required/>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Apellidos</Label>
                                    <Input id="last-name" placeholder="Otero" required/>
                                </div>
                            </div>
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
                                <Label htmlFor="password">Contraseña</Label>
                                <Input id="password" type="password"/>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms"/>
                                <Label htmlFor="terms">Aceptar términos y condiciones</Label>
                            </div>
                            <Button type="submit" className="w-full">
                                Crear cuenta
                            </Button>
                            <Button variant="outline" className="w-full">
                                Crear cuenta con Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
