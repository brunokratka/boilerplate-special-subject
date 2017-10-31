import React from 'react';
import {
  Wrapper
} from './Col-style' ;

function Col({ desktop, tablet, phone, children }) {
  return(
    <Wrapper
      desktop={desktop}
      tablet={tablet}
      phone={phone}
    >
      {children}
    </Wrapper>
  )
}

export default Col;