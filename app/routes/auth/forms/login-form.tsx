import { LockIcon, LogInIcon, MailIcon } from "lucide-react";
import { Form } from "react-router";
import Field from "../components/field";

export default function LoginForm() {
  return (
    <Form className="space-y-5">
      <Field label="Email Address" Icon={MailIcon}>
        <input
          type="email"
          id="email"
          name="email"
          className="input pl-10"
          placeholder="you@example.com"
          required
        />
      </Field>
      <Field label="Password" Icon={LockIcon}>
        <input
          type="password"
          id="password"
          name="password"
          className="input pl-10"
          placeholder="Enter your password"
          required
        />
      </Field>

      <button type="submit" className="btn btn-primary w-full text-base h-11">
        <LogInIcon className="h-4 w-4 mr-2" />
        Sign In
      </button>
    </Form>
  );
}
