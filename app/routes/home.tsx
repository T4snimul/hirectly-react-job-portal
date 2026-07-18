import Header from "~/components/header";
import type { Route } from "./+types/home";
import Container from "~/components/container";
import Hero from "./home/hero";
import Footer from "~/components/footer";
import { useAuth } from "~/contexts/auth-context";
import { Plus } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const companyLinks = {
  primaryLink: { label: "Post Job", path: "post-job", Icon: Plus },
};
const guestLinks = {
  primaryLink: { label: "Sign In", path: "/login" },
  secondaryLink: { label: "Post a Job", path: "/register/company" },
};

export default function Home() {
  const { user } = useAuth();

  const links =
    user?.role === "COMPANY"
      ? companyLinks
      : user?.role === "USER"
        ? null
        : guestLinks;

  return (
    <>
      <Header {...links} />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </>
  );
}
