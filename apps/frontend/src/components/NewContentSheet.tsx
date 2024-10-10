import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import GeneralSelect from "@/components/GeneralSelect";
import { Label } from "@/components/ui/label";

interface Props {
  triggerName: string;
  type: "subject" | "class" | "teacher" | "student";
}

export default function NewContentSheet({ triggerName, type }: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [professorClass, setProfessorClass] = useState<string>("");

  const getTitle = () => {
    switch (type) {
      case "teacher":
        return "Nuevo Profesor";
      case "student":
        return "Nuevo Alumno";
      case "class":
        return "Nueva Clase";
      case "subject":
        return "Nueva Asignatura";
      default:
        return "Nuevo Contenido";
    }
  };

  const getThing = () => {
    switch (type) {
      case "teacher":
        return "profesor/a";
      case "student":
        return "alumno/a";
      case "class":
        return "clase";
      case "subject":
        return "asignatura";
      default:
        return "elemento";
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button>{triggerName}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">{getTitle()}</SheetTitle>
          <SheetDescription>
            Este formulario te permite crear un/a nuevo
            {getThing() === "profesor/a" || getThing() === "alumno/a"
              ? "o/a"
              : ""}{" "}
            {getThing()}, rellénalo y envíalo para que los cambios surtan
            efecto.
          </SheetDescription>
        </SheetHeader>

        <FieldsForType type={type} />

        {/* Submit button */}
        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Placeholder for input fields based on the type, using a switch statement
function FieldsForType({
  type,
}: {
  type: "subject" | "class" | "teacher" | "student";
}) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [professorClass, setProfessorClass] = useState<string>("");

  switch (type) {
    case "teacher":
      return (
        <>
          {/* Input fields for creating a new teacher */}
          <div className="mt-2">
            <GeneralSelect
              type="institutions"
              size="mediumPlus"
              usingLabel={true}
            />
            <GeneralSelect
              type="classes"
              size="mediumPlus"
              usingLabel={true}
              onSelect={setProfessorClass}
            />
          </div>
        </>
      );

    case "student":
      return (
        <>
          {/* Input fields for creating a new student */}
          {/* Input: Nombre del alumno */}
          {/* Input: Apellido del alumno */}
          {/* Input: Curso del alumno */}
        </>
      );

    case "class":
      return (
        <>
          {/* Input fields for creating a new class */}
          {/* Input: Nombre de la clase */}
          {/* Input: Número de estudiantes asignados */}
        </>
      );

    case "subject":
      return (
        <>
          {/* Input fields for creating a new subject */}
          {/* Input: Nombre de la asignatura */}
          {/* Input: Profesor encargado de la asignatura */}
        </>
      );

    default:
      return null;
  }
}
