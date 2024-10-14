import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
