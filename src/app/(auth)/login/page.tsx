"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFormSchema, loginFormSchema } from "@/schemas/login-form-schema";
import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components";
import { formValidation } from "@/utils/form";
import { login } from "@/actions/auth";

function LoginPage() {
  const form = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 w-1/4">
        <h1 className="text-foreground font-bold text-4xl mb-4">Login</h1>

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" {...field} type="email" />
              </FormControl>
              <FormMessage>{formValidation(errors, field.name)}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormMessage>{formValidation(errors, field.name)}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
export default LoginPage;
