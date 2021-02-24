import styled from 'styled-components';
import React, {useState} from 'react';

const _CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    justify-content: space-between;
    background: #bdd067;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background: #707175;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`
const CategorySection: React.FC = () => {
  // const categoryMap = {'-':'支出','+':'收入'}
  // type X = typeof categoryMap  //{'-':string,'+':string}
  // type Y = keyof X // '-'|'+'
  const categoryMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-','+'])
  const [category,setCategory] = useState('-')
  return(
    <_CategorySection>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {setCategory(c)}}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </_CategorySection>
  )
}
export {CategorySection}