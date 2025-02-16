import styles from "./Box.module.scss";

/**
 * Takes in data with format:
 * {
 *      title: __,
 *      title_description: __,
 *      time_period: __,
 *      context: __,
 * }
 *
 * Return:
 *  React component box
 */

export default function Box({ data, link, index }) {
  return (
    <div
      className={styles.Box_container}
      onClick={() => {
        window.open(link);
      }}
      key={index}
    >
      <div className={styles.Box_title}>{data["title"]}</div>
      <div className={styles.Box_description}>
        {data["title_description"]}
        <br />
        {data["time_period"]}
        <br />
        <br />
        {data["context"]}
      </div>
    </div>
  );
}
