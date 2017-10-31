import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  .video-container{
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    iframe{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`