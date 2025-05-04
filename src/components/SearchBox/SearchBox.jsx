import style from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={style.searchInput}
        type="text"
        value={value} // зв’язується з пропсом
        onChange={onChange} // викликає переданий колбек
      />
    </>
  );
};
export default SearchBox;
