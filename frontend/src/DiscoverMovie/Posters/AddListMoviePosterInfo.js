import PropTypes from 'prop-types';
import React from 'react';
import formatRuntime from 'Utilities/Date/formatRuntime';
import getRelativeDate from 'Utilities/Date/getRelativeDate';
import styles from './AddListMoviePosterInfo.css';

function AddListMoviePosterInfo(props) {
  const {
    studio,
    inCinemas,
    digitalRelease,
    physicalRelease,
    certification,
    runtime,
    sortKey,
    showRelativeDates,
    shortDateFormat,
    timeFormat
  } = props;

  if (sortKey === 'studio' && studio) {
    return (
      <div className={styles.info}>
        {studio}
      </div>
    );
  }

  if (sortKey === 'inCinemas' && inCinemas) {
    const inCinemasDate = getRelativeDate(
      inCinemas,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info}>
        {`In Cinemas ${inCinemasDate}`}
      </div>
    );
  }

  if (sortKey === 'digitalRelease' && digitalRelease) {
    const digitalReleaseDate = getRelativeDate(
      digitalRelease,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info}>
        {`Digital ${digitalReleaseDate}`}
      </div>
    );
  }

  if (sortKey === 'physicalRelease' && physicalRelease) {
    const physicalReleaseDate = getRelativeDate(
      physicalRelease,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info}>
        {`Released ${physicalReleaseDate}`}
      </div>
    );
  }

  if (sortKey === 'certification') {
    return (
      <div className={styles.info}>
        {certification}
      </div>
    );
  }

  if (sortKey === 'runtime') {
    return (
      <div className={styles.info}>
        {formatRuntime(runtime)}
      </div>
    );
  }

  return null;
}

AddListMoviePosterInfo.propTypes = {
  studio: PropTypes.string,
  inCinemas: PropTypes.string,
  certification: PropTypes.string,
  digitalRelease: PropTypes.string,
  physicalRelease: PropTypes.string,
  runtime: PropTypes.number,
  sortKey: PropTypes.string.isRequired,
  showRelativeDates: PropTypes.bool.isRequired,
  shortDateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired
};

export default AddListMoviePosterInfo;
