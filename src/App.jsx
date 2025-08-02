import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import React, { Component } from "react";
import css from "./App.module.css";
import { Form } from "./components/Form";
import { FilteredContacts } from "./components/FilteredContacts";
import { nanoid } from "nanoid";

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//       ],
//       name: "",
//       number: "",
//       filter: "",
//     };
//   }

//   handleInput = (event) => {
//     const filter = event.target.value;
//     this.setState({
//       filter: filter,
//     });
//   };

//   addContact = (name, number) => {
//     const contacts = [...this.state.contacts];
//     if (
//       contacts.find(
//         (contact) => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert("Не можна додавати юзера з таким самим імʼям!");
//       return;
//     } else {
//       const id = nanoid();
//       this.setState({
//         contacts: [...this.state.contacts, { id, name, number }],
//       });
//     }
//   };

//   deleteContact = (event) => {
//     const id = event.target.dataset.id;
//     const contactsArr = this.state.contacts;

//     contactsArr.splice(id, 1);

//     this.setState({
//       contacts: contactsArr,
//     });
//   };

//   render() {
//     const filteredContacts = this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );

//     return (
//       <>
//         <Form onAddContact={this.addContact}></Form>

//         <h2>Contacts</h2>

//         <div className={css.filter}>
//           <label htmlFor="nameForSearch">Find contacts by name</label>
//           <input
//             type="text"
//             name="name"
//             id="nameForSearch"
//             placeholder="Введіть ім'я для пошуку"
//             onInput={this.handleInput}
//             value={this.state.filter}
//           />
//         </div>
//         <FilteredContacts
//           contacts={filteredContacts}
//           deleteTask={this.deleteContact}
//         ></FilteredContacts>
//       </>
//     );
//   }
// }

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
      <Form onAddContact={addContact}></Form>

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
    </>
  );
};
