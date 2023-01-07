import React from 'react';
import * as R from 'ramda';
import WorkSingle from './WorkSingle/WorkSingle';
import { Work } from '../../../assets/types/work.type';
import styles from './worklist.module.css';

type WorkListProps = {
  works: Work[];
};

const WorkList: React.FC<WorkListProps> = (props) => {
  return (
    <section aria-label="Список работ" className={ styles.block }>
      <h2 className={ styles.header }>Список работ</h2>
      <ul className={ styles.worklist }>
        {
          props.works
            .sort(sortByDate)
            .map((work, index) => {
              return (<WorkSingle work={ work } key={ index } />);
            })
        }
      </ul>
    </section>
  );
};

export default WorkList;


function sortByDate(a: Work, b: Work) {
  const aDate = getDate(a.publishDate);
  const bDate = getDate(b.publishDate);
  console.log(bDate.toISOString());
  return aDate > bDate ? -1 : 1;
}

function getDate(dateString: string): Date {

  // @ts-ignore
  return R.pipe(
    R.always(dateString),
    // @ts-ignore
    R.split('.'),
    R.reverse,
    R.join('-'),
    R.tap(console.log),
    (x: string) => new Date(x),
  )();

}