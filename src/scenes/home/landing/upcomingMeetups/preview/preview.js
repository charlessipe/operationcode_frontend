import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import PropTypes from 'prop-types';
import styles from './preview.css';

class Preview extends Component {
  render() {
    const { meetups } = this.props;
    return (
      <div className={styles.preview}>
        <h6 className={styles.previewHeader6}>{meetups.name}</h6>
        <div className={styles.buttonContainer}><LinkButton /></div>
      </div>
    );
  }
}

Preview.propTypes = {
  meetups: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })
};

Preview.defaultProps = {
  meetups: false
};

export default Preview;
