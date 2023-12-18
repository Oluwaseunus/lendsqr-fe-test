import { ReactElement, useEffect } from "react";

import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // redirect to the dashboard/users page since
    // we don't have the design for the /dashboard/ page.
    router.push("/dashboard/users");
  }, [router]);

  return null;
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
