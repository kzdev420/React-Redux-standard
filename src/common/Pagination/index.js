import React from 'react';

import Link from 'common/Link';
import styles from './index.module.css';

const getPageFromUrl = (url) => {
  if (!url) {
    return undefined;
  }

  const params = new URL(url).searchParams;
  return params.get('page') || 1;
};

const Pagination = ({ next, previous, route }) => {
  const nextCount = getPageFromUrl(next);
  const prevCount = getPageFromUrl(previous);
  const nextRoute = nextCount && route(nextCount);
  const prevRoute = prevCount && route(prevCount);

  return (
    <div className={styles.Pagination}>
      { next ? (
        <Link to={nextRoute} className={styles.PaginationArrow}>
          &rarr;
        </Link>
      ) : null }
  
      { previous ? (
        <Link to={prevRoute} className={styles.PaginationArrow}>
          &larr;
        </Link>
      ) : null }
    </div>
  );
}

export default Pagination;
