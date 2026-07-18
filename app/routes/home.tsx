import type { Route } from "./+types/home";
import { useAuth } from "~/contexts/auth-context";
import CompanyDashboard from "./company/company-dashboard";
import UserDashboard from "./user/user-dashboard";
import Hero from "./home/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      {user?.role === "COMPANY" ? (
        <CompanyDashboard />
      ) : user?.role === "USER" ? (
        <UserDashboard />
      ) : (
        <Hero />
      )}
    </>
  );
}
