import { useAuth } from "~/contexts/auth-context";
import { Navigate } from "react-router";
import { ChevronRight, Plus } from "lucide-react";
import PageHeader from "~/components/page-header";

function ManageJobs() {
  const { user } = useAuth();

  if (user?.role !== "COMPANY") return <Navigate to="/" />;

  return (
    <>
      <PageHeader
        pageTitle="Manage Jobs"
        pageDescription="View and manage all your job postings"
        actionTitle="Create new Job"
      />
    </>
  );
}

export default ManageJobs;
