import React from 'react';
import {_TagsSection} from './TagsSection/UI';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

type Props = {
  value: number[];
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入您要添加的标签名');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    // selectedTags 里存放被选中的标签
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => (selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '');
  return (
    <_TagsSection>
      <ol>
        {tags.map(tag =>
          <li className={getClass(tag.id)} key={tag.id} onClick={() => {onToggleTag(tag.id);}}>{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </_TagsSection>
  );
};

export {TagsSection};