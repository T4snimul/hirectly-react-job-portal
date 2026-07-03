import { LockIcon, LogInIcon, MailIcon } from "lucide-react";
import { Form } from "react-router";
import { useForm } from "react-hook-form";
import Field from "../components/field";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
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

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login submitted", values);
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
