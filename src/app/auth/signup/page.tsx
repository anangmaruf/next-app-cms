"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SpinnerLoader } from "@/components/Loader";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const registerFormSchema = z
  .object({
    name: z.string().trim().min(3, { message: "Name field is required" }),
    email: z.string().email({ message: "Email field is required" }),
    password: z.string({ required_error: "Required" }).min(6, { message: "Password must be at least 6 characters" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Confirmation Password doesnt match",
    path: ["confirm_password"],
  });

type FormData = z.infer<typeof registerFormSchema>;

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(registerFormSchema) });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/register", data);
      console.log(response);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card.Card className="w-[500px]">
        <Card.CardHeader>
          <Card.CardTitle>Register</Card.CardTitle>
          <Card.CardDescription>Manage your content</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="test" {...register("name")} name="name" placeholder="input your name" />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" {...register("email")} name="email" placeholder="input your email" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" {...register("password")} name="password" placeholder="input your password" />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input type="password" {...register("confirm_password")} name="confirm_password" placeholder="input your confirmation password" />
                {errors.confirm_password && <p className="text-red-500">{errors.confirm_password.message}</p>}
              </div>
            </div>
            <Button type="submit" disabled={isLoading} className="bg-black text-white h-8 w-full">
              {isLoading ? <SpinnerLoader size={7} /> : "Sign up"}
            </Button>
          </form>
        </Card.CardContent>
        <Card.CardFooter className="mt-5"></Card.CardFooter>
      </Card.Card>
    </AuthLayout>
  );
};

export default Register;
