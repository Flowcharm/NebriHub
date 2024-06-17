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

interface GeneralSelectProps {
  type: keyof SelectTypes;
  onSelect: (value: string) => void;
  size: 'small' | 'medium' | 'large';
  usingLabel: boolean | undefined;
}

interface SelectTypes {
  classes: string;
  institutions: string;
  subjects: string;
}

export default function GeneralSelect({ type, onSelect, size, usingLabel }: GeneralSelectProps) {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';
        switch (type) {
          case 'classes':
            url = 'http://localhost:3005/classes';
            break;
          case 'institutions':
            url = 'http://localhost:3005/institutions';
            break;
          case 'subjects':
            url = 'http://localhost:3005/subjects';
            break;
          default:
            throw new Error('Unknown type');
        }

        const response = await axios.get(url);
        const names = response.data.map((item: { name: string }) => item.name);
        setItems(names);
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      }
    };

    fetchData();
  }, [type]);

  const handleChange = (value: string) => {
    setSelectedItem(value);
    onSelect(value);
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-[100px]';
      case 'medium':
        return 'w-[230px]';
      case 'large':
        return 'w-[350px]';
      default:
        return 'w-[200px]'; // default to medium if size is not recognized
    }
  };

  return (
      <div>
        {usingLabel === true ? <Label htmlFor={type}>{`Select ${type}`}</Label> : ""}
        <Select onValueChange={handleChange}>
          <SelectTrigger className={getSizeClass()}>
            <SelectValue placeholder={`-- Choose your ${type} --`} />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
  );
}
