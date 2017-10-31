import React            from 'react';
import {
  Wrapper
} from './PageWrapper-style' ;

function PageWrapper({ fullWidth, children }) {
  return(
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PageWrapper;