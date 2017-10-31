import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-flow: row wrap;
  & > div:last-child{
    margin-right: 0;
  }
  ${props => {
      if(props.vAlign){
        return `
          justify-content: ${props.vAlign};
        `
      }
      if(props.hAlign){
        return `
          align-Items: ${props.hAlign};
        `
      }
    }
  }
`;