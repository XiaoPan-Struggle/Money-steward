import Layout from 'components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from 'views/Money/CategorySection';
import {RecordItem, useRecords} from 'Hooks/useRecords';
import {useTags} from 'Hooks/useTags';
import {Header, Item} from 'views/Statistcs/UI';
import day from 'dayjs';
import 'core-js';


function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    const value = r;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(value);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      {array.map(([date,records]) => <div>
          <Header>{date}</Header>
          <div>
            {
              records.map(r => {
                return <Item>
                  <div className="tag oneLine">
                    {r.tagIds
                      .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce((result, span,index,array) =>
                        result.concat(index<array.length-1 ? [span, '，']:[span]),
                        [] as ReactNode[])
                    }
                  </div>
                  <div className="note oneLine">
                    {r.note}
                  </div>
                  <div className="amount">
                    ￥{r.amount}
                  </div>
                </Item>;
              })
            }
          </div>
        </div>)}
    </Layout>
  );
}

export default Statistics;