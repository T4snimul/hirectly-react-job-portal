import { LockIcon, LogInIcon, MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Field from "../components/field";
import api, { isAxiosError } from "~/api/axios";
import { useAuth } from "~/contexts/auth-context";
import { Form, useNavigate } from "react-router";

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
  const { setAuth } = useAuth();
  const navigate = useNavigate();
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
    try {
      const response = await api.post<LoginResponse>("/auth/login", {
        ...values,
        role: "USER",
      });

      const { token, data: user } = response.data;
      setAuth({ user, token });
      toast("Login successful!");
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        toast(errorMessage ?? "Unable to sign in right now");
        return;
      }

      toast("Unable to sign in right now");
    }
  };

  return (
    <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
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
