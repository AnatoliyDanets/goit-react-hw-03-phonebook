import React from "react";
import PropTypes from "prop-types";
import s from "../ContactList/ContactList.module.css";

export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li key={id} className={s.contact__item}>
      <div>
        <span className={s.contact__text}>{name}: </span>
        <span className={s.contact__text}>{number}</span>
      </div>
      <button
        className={s.contact__btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
