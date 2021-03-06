import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer';
import Container from '../Container/Container';

class List extends React.Component {
  render() {
    const {title, image, description, columns, addColumn} = this.props;
    
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description: settings.defaultListDescription,
  }
}

export default List;
