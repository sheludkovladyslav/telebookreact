import React, { Component, use, useContext, useRef, useState } from "react";
import css from "./Form.module.css";
import { ContactsContext } from "../contexts/ContactsContext";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { addContact } = useContext(ContactsContext);

  const inputFocusRef = useRef(null);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nowName = name;
    const nowNumber = number;

    addContact(nowName, nowNumber);

    setName("");
    setNumber("");

    inputFocusRef.current.focus();
  };

  return (
    <form className={css.form} action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        ref={inputFocusRef}
        name="name"
        id="name"
        className={css.input}
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="phone" className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        className={css.input}
        value={number}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="phone"
      />

      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};
