import { LockIcon, LogInIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import { useForm } from "react-hook-form";
import Field from "../components/field";
import api, { isAxiosError } from "~/api/axios";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  token: string;
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  message?: string;
};

export default function LoginForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setSubmitError(null);

    try {
      const response = await api.post<LoginResponse>("/auth/login", {
        ...values,
        role: "USER",
      });

      console.log("Login successful", response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;

        /* if (errorMessage === "Invalid credentials") {
          const response = await api.post<LoginResponse>("/auth/login", {
            ...values,
            role: "COMPANY",
          });

          console.log("Logged in as Company", response.data);
        } */

        setSubmitError(errorMessage ?? "Unable to sign in right now");
        return;
      }

      setSubmitError("Unable to sign in right now");
    }
  };

  return (
    <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      <Field
        label="Email Address"
        Icon={MailIcon}
        error={errors.email?.message}
      >
        <input
          type="email"
          id="email"
          className="input pl-10"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
      </Field>
      <Field label="Password" Icon={LockIcon} error={errors.password?.message}>
        <input
          type="password"
          id="password"
          className="input pl-10"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </Field>

      <button
        type="submit"
        className="btn btn-primary w-full text-base h-11"
        disabled={isSubmitting}
      >
        <LogInIcon className="h-4 w-4 mr-2" />
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </Form>
  );
}
