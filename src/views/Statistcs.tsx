import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from 'Hooks/useRecords';
import {useTags} from 'Hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';
import 'core-js';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #fccdb3;

  > .note {
    margin-right: auto;
    margin-left: 18px;
    font-size: 16px;
    color: #888;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
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
  console.log(array);
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      {array.map(([date,records]) => <div>
          <h3>{date}</h3>
          <div>
            {
              records.map(r => {
                return <Item>
                  <div className="tag">
                    {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                  </div>
                  <div className="note">
                    {r.note}
                  </div>
                  <div className="amount">
                    ￥{r.amount}
                  </div>
                  {day(r.createdAt).format('YYYY年MM月DD日')}
                </Item>;
              })
            }
          </div>
        </div>)}
    </Layout>
  );
}

export default Statistics;