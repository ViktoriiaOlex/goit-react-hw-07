import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { getContactItems, getFilterName } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const selectContacts = useSelector(getContactItems);
  const getFilterVal = useSelector(getFilterName);

  const arrFilterContacts = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(getFilterVal.toLowerCase().trim())
  );

  const handleDeleteContact = idContact => {
    dispatch(deleteContact(idContact));
  };
  return (
    <ul className={css.list}>
      {arrFilterContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              id={id}
              name={name}
              phone={number}
              handleDelete={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;