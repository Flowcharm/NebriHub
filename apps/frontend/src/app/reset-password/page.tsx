"use client";

import { useState, FormEvent } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();
  const { token } = router.query;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/auth/reset-password', { token, newPassword });
      setMessage('Password reset successful');
      router.push('/login');
    } catch (error: any) {
      setMessage(`Failed to reset password: ${error.response?.data?.message || 'An error occurred'}`);
    }
  };

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-balance text-muted-foreground">
          Enter your new password.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input
            id="new-password"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </>
  );
}
