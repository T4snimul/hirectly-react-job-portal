import Header from "~/components/header";
import type { Route } from "./+types/home";
import Container from "~/components/container";
import Hero from "./home/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header
        primaryLink={{ label: "Post a Job", path: "/register-company" }}
        secondaryLink={{ label: "Sign In", path: "/login" }}
      />
      <Container>
        <Hero />
      </Container>
    </>
  );
}
