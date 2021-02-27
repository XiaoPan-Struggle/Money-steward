import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultId = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]
const useTags = () => {
  const [tags, setTags] = useState<{id:number,name:string}[]>(defaultId);
  const findTag = (id: number) => {
    return tags.filter(v => v.id === id)[0]
  }
  return {tags, setTags, findTag};
};
export {useTags};