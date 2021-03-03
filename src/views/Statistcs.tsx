import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from 'Hooks/useRecords';
import {useTags} from 'Hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  background: #fccdb3;
  >.note{
    margin-right: auto;
    margin-left: 18px;
    font-size: 16px;
    color: #888;
  }
`
function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <div>{
        records.map(r => {
          return <Item>
            <div className="tag">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            <div className="note">
              {r.note}
            </div>
            <div className="amount">
              ￥{r.amount}
            </div>
            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>
        })
      }</div>
    </Layout>
  )
}
export default Statistics