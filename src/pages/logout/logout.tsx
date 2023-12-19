import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    router.replace("/");
  }, [router]);

  return <p>Logging you out...</p>;
}

export default Logout;
