import { useRouter } from "next/router";
import React, { useEffect } from "react";

function WithAuth(Component: React.JSX.Element) {
  const router = useRouter();

  useEffect(() => {
    const localValue = localStorage.getItem("isAuthenticated");

    const parsed = localValue ? JSON.parse(localValue) : false;

    if (!parsed) {
      router.replace("/login");
    }
  }, [router]);

  return <>{Component}</>;
}

export default WithAuth;
