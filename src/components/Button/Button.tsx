import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outlined";
}

export default function Button({
  type,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type || "button"} className={styles[variant]} {...props}>
      {children}
    </button>
  );
}
