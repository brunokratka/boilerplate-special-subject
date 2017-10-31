import React            from 'react';
import { string, bool } from 'prop-types';
// dependencies
import { Text }    from './Paragraph-style';

Paragraph.propTypes = {
  text: string.isRequired,
  eye: bool,
  color: string,
  href: string,
  link: bool
}
/**
* Component Paragraph
* @param {String} text            - string text
* @param {Boolean} eye            - Emphasis text boolean
*/

function identifyTag({tag, text, key}){
  switch (tag) {
    case 'b':
      return <b key={key}>{text}</b>;
  
    case 'i':
      return <i key={key}>{text}</i>;
  
    case 'u':
      return <u key={key}>{text}</u>;
  
    case 'strike':
      return <strike key={key}>{text}</strike>;
  
    default:
      return text;
  }
}

function htmlParse(text){
  const textArray = [];
  let currentText = text;
  let counter = 0;
  while(currentText){
      const begin     = currentText.indexOf('<');
      const end       = currentText.indexOf('>') + 1;
      const close     = currentText.indexOf('</');
      const closeEnd  = currentText.indexOf('>', currentText.indexOf('</'));
      
    if (begin === 0){

          textArray.push(identifyTag({
              tag: currentText.slice(begin + 1, end - 1),
              text: currentText.slice(end, close),
              key: counter
          }))
          currentText = currentText.substr(closeEnd + 1);
    }else if(begin > 0){
        textArray.push(identifyTag({
            tag: null,
            text: currentText.slice(0, begin)
        }))
        currentText = currentText.substr(begin);
    }else{
        textArray.push(identifyTag({
            tag: null,
            text: currentText
        }))
        currentText = null;
    }
    counter++;
  }
  return textArray;
}

function Paragraph({ text, eye, color, href, link }) {
  return (
    <Text eye={eye} color={color}>
      {htmlParse(text)}
    </Text>
  );
}

export default Paragraph;