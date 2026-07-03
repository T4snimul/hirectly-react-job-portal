import Centered from "~/components/centered";
import Container from "~/components/container";
import Header from "~/components/header";
import { Outlet } from "react-router";
import Footer from "~/components/footer";

export default function Register() {
  return (
    <>
      <Header
        spanText="Already have an account?"
        primaryLink={{ label: "Sign In", path: "/login" }}
      />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
