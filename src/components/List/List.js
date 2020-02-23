import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.image}/>

        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>

        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description: settings.defaultListDescription,
  }
}

export default List;
