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
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topper>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topper>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
        />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export {Tag};