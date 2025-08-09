import { useState } from "react";
import reactLogo from "./assets/react.svg";
import css from "./App.module.css";
import { Form } from "./components/Form";
import { FilteredContacts } from "./components/FilteredContacts";
import { nanoid } from "nanoid";
import { ContactsContext } from "./contexts/ContactsContext";

import React from "react";

export const App = ({ props }) => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const handleInput = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const addContact = (name, number) => {
    const newContacts = [...contacts];
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert("Не можна додавати юзера з таким самим імʼям!");
      return;
    } else {
      const id = nanoid();
      setContacts([...newContacts, { id, name, number }]);
    }
  };

  const deleteContact = (event) => {
    const id = event.target.dataset.id;
    const contactsArr = contacts;
    contactsArr.splice(id, 1);
    setContacts(contactsArr);
    console.log("Deleting contact with id:", id);
    console.log(contactsArr);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ContactsContext.Provider
        value={{ contacts: filteredContacts, deleteContact, addContact }}
      >
        <Form></Form>

        <h2>Contacts</h2>

        <div className={css.filter}>
          <label htmlFor="nameForSearch">Find contacts by name</label>
          <input
            type="text"
            name="name"
            id="nameForSearch"
            placeholder="Введіть ім'я для пошуку"
            onInput={handleInput}
            value={filter}
          />
        </div>
        <FilteredContacts
          contacts={filteredContacts}
          deleteTask={deleteContact}
        ></FilteredContacts>
      </ContactsContext.Provider>
    </>
  );
};
