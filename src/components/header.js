import React from 'react';
import profile from '../profile.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

function Header(props) {
  const { filterBook } = props;
  const handleFilterChange = (filter) => {
    filterBook(filter);
  };
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <h1 className="Bookstore-CMS">Bookstore CMS</h1>
          <div className="header-left-links">
            <span className="BOOKS active">BOOKS</span>
            <span className="CATEGORIES">CATEGORIES &gt;</span>
            <CategoryFilter filterChange={handleFilterChange} />
          </div>
        </div>
        <img className="header-right" alt="header-right" src={profile} />
      </div>
    </header>
  );
}

Header.propTypes = {
  filterBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterBook: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Header);
