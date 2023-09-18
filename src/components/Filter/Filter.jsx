import Label from '../ContactForm/Label/Label';
import { useDispatch, useSelector } from 'react-redux';
//import { changeFilter } from 'redux/ContactSlice/contactSlice';
import { actions } from '../../redux/contacts/contactsActions';
import { getFilter } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(actions.changeFilter(event.currentTarget.value));
  };

  return (
    <Label labelTitle={'Find contacts by name'}>
      <input
        type="text"
        name="filter"
        placeholder="Search name"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;
