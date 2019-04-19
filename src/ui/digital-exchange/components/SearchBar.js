import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'patternfly-react';
import { Field, reduxForm } from 'redux-form';
import SearchTextInput from 'ui/digital-exchange/components/SearchTextInput';

const SearchBarBody = ({ clearSearch, handleSubmit }) => (
  <form className="SearchBar__container" onSubmit={handleSubmit}>
    <Field
      name="keyword"
      component={SearchTextInput}
      onClear={clearSearch}
    />
    <Button
      className="SearchBar__button"
      type="submit"
    >
      <Icon name="search" />
    </Button>
  </form>
);

SearchBarBody.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const SearchBar = reduxForm({
  form: 'searchBar',
})(SearchBarBody);

export default SearchBar;
