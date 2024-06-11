"use client";
import { useRouter } from 'next/router';

export default function VerifyInstitutionPage() {
  const router = useRouter();
  const { institution } = router.query;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Verificar Institución</h1>
        <p>Seleccionaste: {institution}</p>
        <p>Continúa con el proceso de verificación para tu institución.</p>
      </div>
    </div>
  );
}
