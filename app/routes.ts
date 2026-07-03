import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/auth/login.tsx"),
  route("/register", "routes/auth/register.tsx", [
    index("routes/auth/register-job-seeker.tsx"),
    route("company", "routes/auth/register-company.tsx"),
  ]),
] satisfies RouteConfig;
