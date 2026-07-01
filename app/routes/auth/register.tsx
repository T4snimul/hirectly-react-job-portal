import Centered from "~/components/centered";
import Container from "~/components/container";
import Header from "~/components/header";
import PageTitle from "./components/page-title";
import TypeToggle from "./components/type-toggle";
import { Outlet } from "react-router";

export default function Register() {
  return (
    <>
      <Header
        spanText="Already have an account?"
        primaryLink={{ label: "Sign In", path: "/login" }}
      />
      <Container>
        <Centered>
          <PageTitle
            title="Create Your Account"
            subtitle="Join thousands of professionals finding their dream jobs"
          />

          <TypeToggle />

          <Outlet />
        </Centered>
      </Container>
    </>
  );
}
