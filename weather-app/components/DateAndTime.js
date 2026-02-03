import { isoToLocalTime, time } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {weatherData.weather.current_weather.time}
        {weatherData.weather.timezone}
      </h2>
    </div>
  );
};
