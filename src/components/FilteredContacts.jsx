import css from "./FilteredContacts.module.css";

export const FilteredContacts = ({ contacts, deleteTask }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map((contact, index) => {
        return (
          <li key={index} className={css.item}>
            <p className={css.name}>{contact.name}:</p>
            <p className={css.number}>{contact.number}</p>
            <button className={css.btn} data-id={index} onClick={deleteTask}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
