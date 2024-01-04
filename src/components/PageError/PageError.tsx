import styles from "./PageError.module.scss";

interface PageErrorProps {
  message?: string;
}

function PageError({
  message = "There was an error loading the page. Please refresh the page and try again.",
}: PageErrorProps) {
  return (
    <div className={styles.pageError}>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default PageError;
