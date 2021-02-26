import styled from 'styled-components';

const NavWrapper = styled.nav`
  background: #f9e1bb;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      > a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;
        > .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: #f60;
          .icon{
            fill: #f60;
          }
        }
      }
    }
  }
`;

export {NavWrapper}