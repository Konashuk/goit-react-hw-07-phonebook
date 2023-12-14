import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';
import { selectFilterContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operation';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const updateCont = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => {
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
