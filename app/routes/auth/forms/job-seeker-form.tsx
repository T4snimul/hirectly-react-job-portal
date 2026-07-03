import { useForm } from "react-hook-form";
import { Form, Link } from "react-router";
import Field from "../components/field";
import {
  Briefcase,
  Calendar,
  Eye,
  EyeOff,
  Lock,
  MailIcon,
  Phone,
  User,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

type JobSeekerFormValues = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  title: string;
  password: string;
  terms: boolean;
  confirmPassword: string;
};

export default function JobSeekerForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JobSeekerFormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  function onSubmit(values: JobSeekerFormValues) {
    console.log("Register Submitted", values);
  }

  function togglePassword() {
    setShowPassword((current) => !current);
  }

  return (
    <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Field label="Name" Icon={User} error={errors.name?.message}>
        <input
          placeholder="John"
          type="text"
          id="name"
          className="input pl-10"
          {...register("name", {
            required: "Name is required",
          })}
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Email Address"
          Icon={MailIcon}
          error={errors.email?.message}
        >
          <input
            placeholder="you@example.com"
            type="email"
            id="email"
            className="input pl-10"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
        </Field>
        <Field label="Phone Number" Icon={Phone} error={errors.phone?.message}>
          <input
            placeholder="+1 (555) 000-0000"
            type="tel"
            id="phone"
            className="input pl-10"
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Job Title" Icon={Briefcase} error={errors.title?.message}>
          <input
            type="text"
            id="title"
            placeholder="Senior Front-End Engineer"
            className="input pl-10"
            {...register("title", {
              required: "Experience is required",
            })}
          />
        </Field>
        <Field
          label="Years of Experience"
          Icon={Calendar}
          error={errors.experience?.message}
        >
          <select
            id="experience"
            className="input pl-10"
            {...register("experience", {
              required: "Experience is required",
            })}
          >
            <option value="">Select experience level</option>
            <option value="entry">Entry Level (0-2 years)</option>
            <option value="mid">Mid Level (3-5 years)</option>
            <option value="senior">Senior (6-10 years)</option>
            <option value="expert">Expert (10+ years)</option>
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Password" Icon={Lock} error={errors.password?.message}>
          <>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input pl-10"
              placeholder="Enter a Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </>
        </Field>
        <Field
          label="Confirm Password"
          Icon={Lock}
          error={errors.confirmPassword?.message}
        >
          <>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              className="input pl-10"
              placeholder="Re-enter your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </>
        </Field>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
          {...register("terms", {
            required: "Please agree to the Terms of Service",
          })}
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.terms?.message && (
        <p className="text-sm text-red-600">{errors.terms?.message}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full text-base h-11 mt-2"
      >
        <UserPlus className="h-4 w-4 mr-2" />
        Create Account
      </button>
    </Form>
  );
}
