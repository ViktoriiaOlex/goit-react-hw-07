import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(9, 'Too Long!')
      .required('Required')
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Number is not valid, enter please ххх-ххx-ххxx'
      ),
  });

  const dispatch = useDispatch();

  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    addContacts(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage
            className={css.feedbackError}
            name="name"
            as="span"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field type="text" name="number" className={css.input} />
          <ErrorMessage
            name="number"
            as="span"
            className={css.feedbackError}
            component="span"
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
