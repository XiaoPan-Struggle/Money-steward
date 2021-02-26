import styled from 'styled-components';

const _CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    justify-content: space-between;
    background: #bdd067;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background: #707175;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`
export {_CategorySection}
