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
  return {tags, setTags};
};
export {useTags};