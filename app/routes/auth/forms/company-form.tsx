import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Briefcase,
  Building,
  Building2,
  Calendar,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import { Form } from "react-router";
import Field from "../components/field";

type CompanyFormValues = {
  companyName: string;
  email: string;
  website: string;
  industry: string;
  companySize: string;
  foundedYear: string;
  location: string;
  description: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  verified: boolean;
  updates: boolean;
};

type PasswordField = "password" | "confirmPassword";

export default function CompanyForm() {
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormValues>({
    defaultValues: {
      companyName: "",
      email: "",
      website: "",
      industry: "",
      companySize: "",
      foundedYear: "",
      location: "",
      description: "",
      password: "",
      confirmPassword: "",
      terms: false,
      verified: false,
      updates: false,
    },
  });

  const password = watch("password");

  function onSubmit(values: CompanyFormValues) {
    console.log("Company registration submitted", values);
  }

  function togglePassword(field: PasswordField) {
    setVisiblePasswords((current) => ({
      ...current,
      [field]: !current[field],
    }));
  }

  return (
    <Form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <section className="space-y-5">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Building className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Company Information</h2>
        </div>

        <Field
          label="Company Name"
          Icon={Building2}
          error={errors.companyName?.message}
        >
          <input
            type="text"
            id="companyName"
            className="input pl-10"
            placeholder="e.g., TechCorp Solutions"
            {...register("companyName", {
              required: "Company name is required",
            })}
          />
        </Field>

        <Field label="Email Address" Icon={Mail} error={errors.email?.message}>
          <input
            type="email"
            id="email"
            className="input pl-10"
            placeholder="john.doe@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field
            label="Company Website"
            Icon={Globe}
            error={errors.website?.message}
          >
            <input
              type="url"
              id="website"
              className="input pl-10"
              placeholder="https://example.com"
              {...register("website", {
                required: "Website is required",
              })}
            />
          </Field>

          <Field
            label="Industry"
            Icon={Briefcase}
            error={errors.industry?.message}
          >
            <select
              id="industry"
              className="input pl-10"
              {...register("industry", {
                required: "Industry is required",
              })}
            >
              <option value="">Select industry</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance & Banking</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="consulting">Consulting</option>
              <option value="marketing">Marketing & Advertising</option>
              <option value="other">Other</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field
            label="Company Size"
            Icon={Users}
            error={errors.companySize?.message}
          >
            <select
              id="companySize"
              className="input pl-10"
              {...register("companySize")}
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </Field>

          <Field
            label="Founded Year"
            Icon={Calendar}
            error={errors.foundedYear?.message}
          >
            <input
              type="number"
              id="foundedYear"
              className="input pl-10"
              placeholder="e.g., 2010"
              min={1800}
              max={2025}
              {...register("foundedYear")}
            />
          </Field>
        </div>

        <Field
          label="Headquarters Location"
          Icon={MapPin}
          error={errors.location?.message}
        >
          <input
            type="text"
            id="location"
            className="input pl-10"
            placeholder="City, Country"
            {...register("location", {
              required: "Location is required",
            })}
          />
        </Field>

        <Field
          label="Company Description"
          error={errors.description?.message}
          hint="Minimum 100 characters. This will be displayed on your company profile."
        >
          <textarea
            id="description"
            className="textarea min-h-30"
            placeholder="Tell us about your company, mission, and what makes it a great place to work..."
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 100,
                message: "Description should be at least 100 characters",
              },
            })}
          />
        </Field>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Account Security</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Password" Icon={Lock} error={errors.password?.message}>
            <>
              <input
                type={visiblePasswords.password ? "text" : "password"}
                id="password"
                className="input pl-10 pr-10"
                placeholder="Create a strong password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => togglePassword("password")}
              >
                {visiblePasswords.password ? (
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
                type={visiblePasswords.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="input pl-10 pr-10"
                placeholder="Re-enter your password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => togglePassword("confirmPassword")}
              >
                {visiblePasswords.confirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </>
          </Field>
        </div>

        <p className="text-xs text-muted-foreground -mt-2">
          Password must be at least 8 characters with letters and numbers
        </p>
      </section>

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
            {...register("terms", {
              required: "You must agree to the terms",
            })}
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-600">{errors.terms.message}</p>
        )}

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="verified"
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
            {...register("verified", {
              required:
                "Please confirm you are authorized to register this company",
            })}
          />
          <label htmlFor="verified" className="text-sm text-muted-foreground">
            I confirm that I am an authorized representative of this company and
            have the right to register on its behalf
          </label>
        </div>
        {errors.verified && (
          <p className="text-sm text-red-600">{errors.verified.message}</p>
        )}

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="updates"
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
            {...register("updates")}
          />
          <label htmlFor="updates" className="text-sm text-muted-foreground">
            Send me product updates, hiring tips, and promotional offers via
            email
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full text-base h-11 mt-2"
        disabled={isSubmitting}
      >
        <Building2 className="h-4 w-4 mr-2" />
        {isSubmitting ? "Registering Company..." : "Register Company"}
      </button>
    </Form>
  );
}
