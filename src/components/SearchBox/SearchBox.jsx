import { useDispatch, useSelector } from 'react-redux';
import { getFilterName } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const getFilterVal = useSelector(getFilterName);
  const handleImputFilterVal = ev => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.searchLabel}>Find contacts by name</p>
      <input
        className={css.input}
        value={getFilterVal}
        onChange={handleImputFilterVal}
      />
    </div>
  );
};

export default SearchBox;