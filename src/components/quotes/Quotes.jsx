import React                              from 'react';
import { string }                         from 'prop-types';
import { Container, QuotedText, Author }  from './Quotes-style';

Quotes.propTypes = {
  text: string.isRequired,
  author: string.isRequired,
}

/**
* Component Quotes
* @param {String} text    - string text
* @param {String} author  - string name of author
*/
function Quotes({ text, author }){
  return(
    <Container>
      <QuotedText>
        {text}
      </QuotedText>
      <Author>
        — {author}
      </Author>
    </Container>
  );
}

export default Quotes;