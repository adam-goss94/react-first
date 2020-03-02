import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Card = props => (
  <div className={styles.component}>
    {ReactHtmlParser(props.title)}
  </div>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
};
  
export default Card;