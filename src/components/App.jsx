import { GlobalStyle } from 'globasStyle';
import { Phonebooks } from './phonebooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: 12,
        paddingBottom: 48,
      }}
    >
      <Phonebooks />
      <GlobalStyle />
    </div>
  );
};
