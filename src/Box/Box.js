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

export default function Box({ data, link }) {
  return (
    <div
      className={styles.Box_container}
      onClick={() => {
        window.open(link);
      }}
    >
      <h3>{data["title"]}</h3>
      <p>
        {data["title_description"]}
        <br />
        {data["time_period"]}
        <br />
        <br />
        {data["context"]}
      </p>
      <p></p>
    </div>
  );
}
