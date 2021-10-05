import React from "react";
import PropTypes from "prop-types";
import s from "../Filter/Filter.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        className={s.filter__input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
