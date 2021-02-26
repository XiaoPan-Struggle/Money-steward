import React, {useState} from 'react';
import { _TagsSection } from './TagsSection/UI';

type Props = {
  value: string[];
  onChange: (value:string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入您要添加的标签名');
    if (tagName !== null) {
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    // selectedTags 里存放被选中的标签
    const index = selectedTags.indexOf(tag)
    if(index >= 0){
      props.onChange(selectedTags.filter(t => t!== tag))
    }else {
      props.onChange([...selectedTags,tag])
    }
  }
  const getClass = (tag: string) => (selectedTags.indexOf(tag) >= 0 ? 'selected' : '')
  return(
    <_TagsSection>
      <ol>
        {tags.map(tag =>
          <li className={getClass(tag)} key={tag} onClick={() => {onToggleTag(tag)}} >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </_TagsSection>
  )
}

export {TagsSection}