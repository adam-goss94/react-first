import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
      return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}</h3>
        </section>
      )
    }
    
    static propTypes = {
        title: PropTypes.string.isRequired,
    }
  
    static defaultProps = {
        title: 'Default column',
    }
  }
  
  export default List;