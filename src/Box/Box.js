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

export default function Box(data) {
  return (
    <div className={styles.Box_container}>
      <h3>{data.data["title"]}</h3>
      <p>
        {data.data["title_description"]}
        <br />
        {data.data["time_period"]}
        <br />
        <br />
        {data.data["context"]}
      </p>
      <p></p>
    </div>
  );
}
