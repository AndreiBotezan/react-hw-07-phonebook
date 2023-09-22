import Label from '../ContactForm/Label/Label';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
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
