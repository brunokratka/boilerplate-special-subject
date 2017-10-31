import React from 'react';
import {
  Wrapper
} from './Row-style' ;

function Row({ vAlign, hAlign, children }) {
  return(
    <Wrapper
      vAlign={vAlign}
      hAlign={hAlign}
    >
      {children}
    </Wrapper>
  )
}

export default Row;