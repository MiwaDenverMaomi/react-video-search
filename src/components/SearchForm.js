import { useState } from 'react';

const SearchForm = ({ onClickSearch }) => {
  const [term, setTerm] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    onClickSearch(term);
  };

  return (
    <form className="form">
      <div>
        <input type="text" name="term" className="form__inputarea" placeholder="Input keyword"
          onChange={e => setTerm(e.target.value)} />
        <button
          type="submit"
          className="form__btn--s"
          onClick={onClick}
        >Submit</button>
      </div>

      <div className="common__err"></div>
    </form>
  );
};

export default SearchForm;
