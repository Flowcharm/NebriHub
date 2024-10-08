import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FC } from "react";

interface LoginAlertProps {
  title: string;
  message: string;
}

export const LoginAlert: FC<LoginAlertProps> = ({ title, message }) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle> {title} </AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
