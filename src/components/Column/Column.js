import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component { 
  render() {
    const {title, icon, cards, addCard} = this.props;
    
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>

        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>

      </section>
    );
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    title: 'Default column',
    icon: settings.defaultColumnIcon,
  }
}

export default Column;