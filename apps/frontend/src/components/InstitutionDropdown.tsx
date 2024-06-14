import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

interface InstitutionDropdownProps {
  onSelect: (institution: string) => void;
}

export default function InstitutionDropdown({ onSelect }: InstitutionDropdownProps) {
  const [institutions, setInstitutions] = useState<string[]>([]);
  const [selectedInstitution, setSelectedInstitution] = useState<string>('');

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        console.log("The dropdown is trying fr")
        const response = await axios.get('http://localhost:3005/institutions');
        const institutionNames = response.data.map((institution: { name: string }) => institution.name);
        setInstitutions(institutionNames);
      } catch (error) {
        console.error('Error fetching institutions:', error);
      }
    };

    fetchInstitutions();
  }, []);

  const handleChange = (institution: string) => {
    setSelectedInstitution(institution);
    onSelect(institution);
  };

  return (
    <div>
      <Label htmlFor="institution">Tu organización</Label>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[350px]">
          <SelectValue placeholder="-- Elige tu organización --" />
        </SelectTrigger>
        <SelectContent>
          {institutions.map((institution) => (
            <SelectItem key={institution} value={institution}>
              {institution}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
