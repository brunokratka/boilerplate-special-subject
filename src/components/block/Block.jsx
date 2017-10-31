import React            from 'react';
import {
  Section
} from './Block-style' ;

function Block({ fullWidth, children }) {
  return(
    <Section fullWidth={fullWidth}>
      {children}
    </Section>
  )
}

export default Block;