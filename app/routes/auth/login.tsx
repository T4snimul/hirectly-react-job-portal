import Centered from "~/components/centered";
import Container from "~/components/container";
import Header from "~/components/header";
import PageTitle from "./components/page-title";
import AuthCard from "./components/auth-card";
import Divider from "./components/divider";
import FooterLink from "./components/footer-link";
import SecurityNote from "./components/security-note";
import Footer from "~/components/footer";
import TypeToggle from "./components/type-toggle";
import { Building2, User } from "lucide-react";
import { Outlet } from "react-router";

const loginTypes = [
  {
    id: 1,
    link: "/login",
    label: "Job Seeker",
    Icon: User,
  },
  {
    id: 2,
    link: "/login/company",
    label: "Employer",
    Icon: Building2,
  },
];

export default function Login() {
  return (
    <>
      <Header
        spanText="Do not have an account?"
        primaryLink={{ label: "Sign Up", path: "/register" }}
      />
      <Container>
        <Centered>
          <PageTitle
            title="Welcome Back"
            subtitle="Sign in to access your account"
          />

          <TypeToggle types={loginTypes} />

          <AuthCard>
            <Outlet />
            <Divider />
            <FooterLink
              message="Don't have an account?"
              linkLabel="Sign Up as a Job Seeker"
              path="/register"
            />
          </AuthCard>
          <SecurityNote />
        </Centered>
      </Container>
      <Footer />
    </>
  );
}
