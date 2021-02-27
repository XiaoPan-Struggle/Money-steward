import styled from 'styled-components';

const Topper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #f2c5aa;

  > .icon {
    width: 20px;
    height: 20px;
    fill: #707175;
  }
`;
const InputWrapper = styled.div`
  background: #fddce1;
  padding: 0 16px;
  margin: 8px 10px 0 10px;
  border-radius: 10px;
`
export {Topper,InputWrapper}