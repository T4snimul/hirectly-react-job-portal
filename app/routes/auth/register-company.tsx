import { Building2, ChartLine, User, Zap } from "lucide-react";
import Centered from "~/components/centered";
import AuthCard from "./components/auth-card";
import Divider from "./components/divider";
import FooterLink from "./components/footer-link";
import PageTitle from "./components/page-title";
import CompanyForm from "./forms/company-form";
import Feature from "./components/feature";
import TypeToggle from "./components/type-toggle";

export function meta() {
  return [{ title: "Register Your Company - LWS Job Portal" }];
}

export default function RegisterCompany() {
  return (
    <Centered maxWidth="3xl">
      <PageTitle
        Icon={Building2}
        title="Register Your Company"
        subtitle="Start hiring top talent for your organization"
      />

      <TypeToggle
        types={[
          { id: 1, link: "/register", label: "Job Seeker", Icon: User },
          {
            id: 2,
            link: "/register/company",
            label: "Employer",
            Icon: Building2,
          },
        ]}
      />

      <AuthCard>
        <CompanyForm />
        <Divider />
        <FooterLink
          message="Already have an account?"
          linkLabel="Sign In"
          path="/login"
        />
      </AuthCard>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Feature
          Icon={User}
          title="Access Top Talent"
          subtitle="Connect with thousands of qualified candidates actively looking for opportunities"
        />
        <Feature
          Icon={Zap}
          title="Easy Job Posting"
          subtitle="Post jobs in minutes with our intuitive interface and smart templates"
        />
        <Feature
          Icon={ChartLine}
          title="Smart Analytics"
          subtitle="Track applications and optimize your hiring with detailed insights"
        />
      </div>
    </Centered>
  );
}
