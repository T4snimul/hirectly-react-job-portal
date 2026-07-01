import Centered from "~/components/centered";
import Container from "~/components/container";
import Header from "~/components/header";
import PageTitle from "./components/page-title";
import AuthCard from "./components/auth-card";
import LoginForm from "./forms/login-form";
import Divider from "./components/divider";
import FooterLink from "./components/footer-link";

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
          <AuthCard>
            <LoginForm />
          </AuthCard>
          <Divider />
          <FooterLink
            message="Don't have an account?"
            linkLabel="Sign Up as a Job Seeker"
            path="/register"
          />
        </Centered>
      </Container>
    </>
  );
}
