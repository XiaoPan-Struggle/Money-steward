import React from 'react';
import {_TagsSection} from 'views/Money/TagsSection/UI';
import {useTags} from 'Hooks/useTags';
type Props = {
  value: number[];
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

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
      <button onClick={addTag}>新增标签</button>
    </_TagsSection>
  );
};

export {TagsSection};