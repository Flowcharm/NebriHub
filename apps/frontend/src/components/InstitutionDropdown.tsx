import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';

interface InstitutionDropdownProps {
  onSelect: (institution: string) => void;
}

const institutions = ['Selecciona tu institución'];

export default function InstitutionDropdown({ onSelect }: InstitutionDropdownProps) {
  const [selectedInstitution, setSelectedInstitution] = useState<string>(institutions[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const institution = event.target.value;
    setSelectedInstitution(institution);
    onSelect(institution);
  };

  return (
    <Select>
      <SelectTrigger className="w-[350px]">
        <SelectValue placeholder="-- Elige tu organización --" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="InstitutoNebrija">Instituto Nebrija de Formación Profesional</SelectItem>
        <SelectItem value="UniversidadNebrija">Universidad Nebrija</SelectItem>
        <SelectItem value="InstitutoNebrijaLenguasModernas">Instituto Nebrija de Lenguas Modernas</SelectItem>
      </SelectContent>
    </Select>
  );
}
