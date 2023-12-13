import { Field, Form, Label, ErrorMas, Button } from './contactForm.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import * as Yup from 'yup';

const phonebookSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  phone: Yup.string()
    .matches(
      /^\d{7}$/,
      'The phone number must contain exactly 7 digits, and be a number'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dataContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handelForm = value => {
    if (dataContacts.some(contact => contact.name === value.name)) {
      alert('This contact is in your phone book');
    } else {
      dispatch(addContacts(value));
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={phonebookSchema}
      onSubmit={(value, action) => {
        handelForm(value);
        action.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" placeholder="Jane" />
          <ErrorMas name="name" component="span" />
        </Label>
        <Label>
          Number
          <Field type="tel" name="phone" placeholder="2279126" />{' '}
          <ErrorMas name="phone" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
