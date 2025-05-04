import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import style from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'To Short!')
    .max(50, 'Max 50 characters!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'To Short!')
    .max(50, 'Max 50 characters!')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onSubmit(newContact);
        actions.resetForm();
      }}
    >
      {({ touched }) => (
        <Form className={style.form}>
          <label className={style.label}>
            Name:
            <Field name="name" className={style.input} />
            {touched.name && (
              <ErrorMessage
                name="name"
                component="div"
                className={style.error}
              />
            )}
          </label>

          <label className={style.label}>
            Number:
            <Field name="number" className={style.input} />
            {touched.number && (
              <ErrorMessage
                name="number"
                component="div"
                className={style.error}
              />
            )}
          </label>

          <button type="submit" className={style.submitButton}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
