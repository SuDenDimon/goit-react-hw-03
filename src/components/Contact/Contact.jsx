import { FaUser, FaPhone } from 'react-icons/fa';
import style from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={style.contactItem}>
      <div className="contact-info">
        <FaUser /> {name}
      </div>
      <div className="contact-info">
        <FaPhone /> {number}
      </div>
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
