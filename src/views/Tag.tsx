import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button, Center} from 'views/Tags/UI';
import {Input} from 'components/Input';
import {InputWrapper, Topper} from 'views/Tag/UI';

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag,deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const tagContent = (tag: {id:number; name:string}) => (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               onChange={(event => {
                 updateTag(tag.id, {name: event.target.value});
               })}
               value={tag.name}
        />
      </InputWrapper>
      <Center>
        <Button onClick={() => {deleteTag(tag.id)}}>删除标签</Button>
      </Center>
    </div>
  )
  return (
    <Layout>
      <Topper>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon/>
      </Topper>
      { tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
  );
};
export {Tag};