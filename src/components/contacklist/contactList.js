import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/operation';

export const ContactList = () => {
  const dataContacts = useSelector(selectContacts);
  const dataFilters = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return dataContacts.filter(({ name }) => {
      return name.toLowerCase().includes(dataFilters.toLowerCase());
    });
  };

  const updateCont = id => {
    console.log(dataContacts);
    console.log(filterContacts());
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {filterContacts() &&
        filterContacts().map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              {`${name}: ${phone}`}
              <Button onClick={() => updateCont(id)}>Delete</Button>
            </Item>
          );
        })}
    </List>
  );
};
