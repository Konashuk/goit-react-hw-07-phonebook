import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contacklist/contactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Phonebooks = () => {
  const dataContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      {dataContacts.length > 0 && <ContactList />}
    </div>
  );
};
