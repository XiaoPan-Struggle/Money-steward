import React from 'react';
import { useParams } from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from './Tags/UI';

type Params = {
  id: string
}
const Tag:React.FC = () => {
  const {findTag} = useTags()
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
      <div>{tag.name}</div>
    </Layout>
  )
}
export {Tag}