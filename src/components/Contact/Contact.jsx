import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={style.contactItem}>
      <div className={style.infoGroup}>
        <div className={style.contactInfo}>
          <FaUser /> {name}
        </div>
        <div className={style.contactInfo}>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={style.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
