import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.image}/>

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column columnName='First column' />
          <Column columnName='Second column' />
          <Column columnName='Third column' />
        </div>
      </section>
    )
  }
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    children: <p>I can do all the things!!!</p>,
  }
}

export default List;
