import React, {useState} from 'react';
import { _CategorySection } from './CategorySection/UI';

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
              key={c}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </_CategorySection>
  )
}
export {CategorySection}