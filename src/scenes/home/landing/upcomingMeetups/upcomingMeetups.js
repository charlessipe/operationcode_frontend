import React, { Component } from 'react';
import { getMeetups } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './upcomingMeetups.css';


class Meetups extends Component {
  state = {
    meetups: null
  };

  componentWillMount() {
    getMeetups().then((data) => {
      this.setState({ meetups: data });
    });
  }

  render() {
    let currentMeetups;
    if (this.state.meetups === null) {
      // loading
    } else if (this.state.meetups.length === 0) {
      currentMeetups = (
        <p>
          There are no scholarships available at this time, please check back periodically for more
          opportunities.
        </p>
      );
    } else {
      currentMeetups = this.state.meetups.map(upcomingEvent => (
        <div key={upcomingEvent.name} upcomingEvent={upcomingEvent} />
      ));
    }
    return (
      <Section title="UpcomingMeetups">
        <div className={styles.container}>{currentMeetups}</div>
      </Section>
    );
  }
}


export default Meetups;
