import React, {useState} from 'react';
import { _CategorySection } from './CategorySection/UI';

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  // const categoryMap = {'-':'支出','+':'收入'}
  // type X = typeof categoryMap  //{'-':string,'+':string}
  // type Y = keyof X // '-'|'+'
  const categoryMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-','+'])
  const category = props.value
  return(
    <_CategorySection>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c)}}
              key={c}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </_CategorySection>
  )
}
export {CategorySection}