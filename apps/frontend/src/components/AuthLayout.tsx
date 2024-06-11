'use client';

import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [selectedLocale, setSelectedLocale] = useState<string>("Español");

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
  };

  return (
    <div className="relative w-full lg:grid xl:min-h-[820px] lg:min-h-[600px] lg:grid-cols-2">
      <div className="absolute top-5 left-7 p-4 text-sm">
        <span>Idioma: </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-muted-foreground">
            {selectedLocale}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleLocaleChange("Español")}>
              🇪🇸 Español
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLocaleChange("English")}>
              🇬🇧 English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLocaleChange("Italiano")}>
              🇮🇹 Italiano
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          {children}
        </div>
      </div>

      <div className="hidden bg-muted lg:block">
        <Image
          src="/login-cover.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
