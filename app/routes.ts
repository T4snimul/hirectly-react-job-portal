import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/auth/login.tsx", [
    index("routes/auth/forms/login-seeker-form.tsx"),
    route("company", "routes/auth/forms/login-company-form.tsx"),
  ]),
  route("/register", "routes/auth/register.tsx", [
    index("routes/auth/register-job-seeker.tsx"),
    route("company", "routes/auth/register-company.tsx"),
  ]),
  route("/jobs", "routes/company/manage-jobs.tsx"),
] satisfies RouteConfig;
