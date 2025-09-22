/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";
import Emoji from "./Emoji";

function CountryItem({ country }) {
  // console.log(country.emoji);

  return (
    <li className={styles.countryItem}>
      <Emoji text={country.emoji} className={styles.emoji} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
