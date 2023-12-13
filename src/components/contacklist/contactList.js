import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Item } from './contactList.styled';
import { selectContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operation';
// import { useEffect } from 'react';

export const ContactList = () => {
  const dataContacts = useSelector(selectContacts);
  // const dataFilters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  // const filterContacts = () => {
  //   return dataContacts.filter(item => {
  //     return item.value.name.toLowerCase().includes(dataFilters.toLowerCase());
  //   });
  // };

  const updateCont = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {/* {filterContacts() &&
        filterContacts().map(({ id, value: { name, number } }) => {
          return (
            <Item key={id}>
              {`${name}: ${number}`}
              <Button onClick={() => updateCont(id)}>Delete</Button>
            </Item>
          );
        })} */}
      {dataContacts &&
        dataContacts.map(({ id, name, phone }) => {
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
