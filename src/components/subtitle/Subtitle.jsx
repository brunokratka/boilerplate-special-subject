import React                                  from 'react';
import { string }                             from 'prop-types';
// dependencies
import { Paragraph, Container, AlignBottom }  from './Subtitle-style';

Subtitle.propTypes = {
  text: string.isRequired
}

/**
* Component Subtitle
* @param {String} text    - string text
*/
function Subtitle({ text }) {
  return (
    <Container>
        <AlignBottom>
            <Paragraph className="col-sm-3 col-xs-12">
                {text}
            </Paragraph>
        </AlignBottom>
    </Container>
  )
}

export default Subtitle;