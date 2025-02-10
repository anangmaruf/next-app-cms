"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserLoginProps } from "@/types/User.types";
import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";

const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginProps>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = (data: UserLoginProps) => {
    console.log(data);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  };
  return (
    <AuthLayout>
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>udah masuk </CardTitle>
          <CardDescription>Manage your content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="grid w-full items-center gap-4 mb-5">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" {...register("email")} name="email" placeholder="input your email" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" {...register("password")} name="password" placeholder="input your password" />
              </div>
            </div>
            <Button type="submit" className="bg-black text-white w-full">
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="mt-5"></CardFooter>
      </Card>
    </AuthLayout>
  );
};

export default Signin;
