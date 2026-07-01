import { Bell, Briefcase, ShieldCheck } from "lucide-react";
import Feature from "./feature";

export default function FeatureHighlights() {
  return (
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
  );
}
