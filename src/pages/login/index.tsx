import Image from "next/image";
import { useState } from "react";

import Button from "@/components/Button";
import { AvenirNext } from "@/app/fonts";

import logo from "@/assets/images/logo.svg";
import loginHero from "@/assets/images/loginHero.png";

import styles from "./page.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    router.push("/dashboard");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="Lendsqr" />
      </div>

      <div className={styles.loginHero}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Lendsqr" />
        </div>

        <Image width={600} src={loginHero} alt="Welcome to the login page" />
      </div>

      <div className={styles.loginMain}>
        <div>
          <div className={styles.loginHeader}>
            <h1 className={AvenirNext.className}>Welcome!</h1>
            <p className={AvenirNext.className}>Enter details to login.</p>
          </div>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <input
                name="password"
                value={password}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button
                variant="secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </div>

            <div className={styles.inputActions}>
              <Button variant="secondary">Forgot Password</Button>

              <Button type="submit" variant="primary">
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
