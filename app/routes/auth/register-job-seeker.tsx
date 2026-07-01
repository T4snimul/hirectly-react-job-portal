import AdditionalInfo from "./components/additional-info";
import AuthCard from "./components/auth-card";
import Divider from "./components/divider";
import FeatureHighlights from "./components/feature-highlights";
import FooterLink from "./components/footer-link";
import JobSeekerForm from "./forms/job-seeker-form";

export default function RegisterJobSeeker() {
  return (
    <>
      <AuthCard>
        <JobSeekerForm />
        <Divider />
        <FooterLink
          message="Already have and account?"
          linkLabel="Sign In"
          path="/login"
        />
      </AuthCard>
      <FeatureHighlights />
      <AdditionalInfo />
    </>
  );
}
