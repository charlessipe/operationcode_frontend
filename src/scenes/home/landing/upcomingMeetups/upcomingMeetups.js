import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './upcomingMeetups.css';
import content from './upcomingMeetups.json';


class Meetups extends Component {
  state = {
    meetups: content
  };

  render() {
    let currentMeetups;
    if (this.state.meetups === null) {
      // loading
    } else if (this.state.meetups.length === 0) {
      currentMeetups = (
        <p>
          There are no meetups available at this time, please check back periodically for more
          opportunities.
        </p>
      );
    } else {
      currentMeetups = (
        <p>
          Get meetup data.

        </p>
      );
    }
    return (
      <Section className={styles.meetupsSection} title="UpcomingMeetups">
        <div>
          <div>{currentMeetups}</div>
          <p>Hi</p>
        </div>
      </Section>
    );
  }
}


export default Meetups;
