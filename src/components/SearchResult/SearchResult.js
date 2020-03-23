import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';


class SearchResult extends React.Component {
  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component} >
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }

  static propTypes = {
    cards: PropTypes.array,
  }
}

export default SearchResult;