import {
  Bell,
  Briefcase,
  Building2,
  ShieldCheck,
  User,
  UserPlus,
} from "lucide-react";
import AdditionalInfo from "./components/additional-info";
import AuthCard from "./components/auth-card";
import Divider from "./components/divider";
import Feature from "./components/feature";
import FooterLink from "./components/footer-link";
import JobSeekerForm from "./forms/job-seeker-form";
import Centered from "~/components/centered";
import PageTitle from "./components/page-title";
import TypeToggle from "./components/type-toggle";

export default function RegisterJobSeeker() {
  return (
    <Centered maxWidth="2xl">
      <PageTitle
        Icon={UserPlus}
        title="Create Your Account"
        subtitle="Join thousands of professionals finding their dream jobs"
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
        <JobSeekerForm />
        <Divider />
        <FooterLink
          message="Already have and account?"
          linkLabel="Sign In"
          path="/login"
        />
      </AuthCard>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Feature
          Icon={Briefcase}
          title="Thousands of Jobs"
          subtitle="Access opportunities from top companies worldwide"
        />
        <Feature
          Icon={Bell}
          title="Job Alerts"
          subtitle="Get notified when new jobs match your profile"
        />
        <Feature
          Icon={ShieldCheck}
          title="Secure & Private"
          subtitle="Your data is protected with industry-standard security"
        />
      </div>
      <AdditionalInfo />
    </Centered>
  );
}
