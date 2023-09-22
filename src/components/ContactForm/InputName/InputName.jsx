import PropTypes from 'prop-types';
import s from './InputName.module.css';

const InputName = ({ name, onNameChange }) => {
  return (
    <input
      type="text"
      name="name"
      //pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required={'required'}
      placeholder="Enter name"
      value={name}
      onChange={onNameChange}
      className={s.input}
      onKeyPress={e => {
        if (!/^[a-z ,.'-]+$/i.test(e.key)) {
          e.preventDefault();
        }
      }}
    />
  );
};

InputName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputName;
