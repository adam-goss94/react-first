import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
      return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.columnName}</h3>
        </section>
      )
    }
    
    static propTypes = {
        columnName: PropTypes.string.isRequired,
    }
  
    static defaultProps = {
        columnName: 'Default column',
    }
  }
  
  export default List;