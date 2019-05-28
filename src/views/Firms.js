import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Firms = ({ firms }) => (
  <GridTemplate pageType="firms">
    {firms.map(({ title, content, firmName, created, id }) => (
      <Card
        id={id}
        cardType="firms"
        title={title}
        content={content}
        firmName={firmName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Firms.propTypes = {
  firms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      firmName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Firms.defaultProps = {
  firms: [],
};

const mapStateToProps = state => {
  const { firms } = state;
  return { firms };
};

export default connect(mapStateToProps)(Firms);
