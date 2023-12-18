import styles from "./PageError.module.scss";

function PageError() {
  return (
    <div className={styles.pageError}>
      <div>
        <p>
          There was an error loading the page. Please refresh the page and try
          again.
        </p>
      </div>
    </div>
  );
}

export default PageError;
