"use client";

import { loginSchema } from "@/app/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;
export default function LoginForm() {
    const {register, handleSubmit, formState:{errors}}= useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
})
    function onSubmit(data:LoginFormData) {
        console.log(data)

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 rounded-xl border p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
        className="w-full rounded-md border p-2"
      />

      <input
        type="password"
        placeholder="Password"
        {...register('password')}
        className="w-full rounded-md border p-2"
      />

      <button className="w-full rounded-md bg-black p-2 text-white">
        Login
      </button>
    </form>
  );
}
