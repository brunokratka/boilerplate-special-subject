import React        from 'react';
import { string, number }   from 'prop-types';
// Separate local imports from dependencies
import { PageTitle, PageSubtitle, SectionTitle, BoldTitle, NextSection } from './Title-style';

Text.propTypes = {
  title: string.isRequired,
  color: string,
  type: number,
  fontStyle: string,
  fontWeight: string
}

/**
* Component Title
* @param {String} title       - string title
* @param {String} color       - color of the title
* @param {Number} type        - type of the title
* @param {String} fontStyle   - font style of the title
* @param {String} fontWeight  - font weight of the title
*/

function Title({ beforeTitle, title, type, color, fontStyle, fontWeight }) {
  switch (type) {
    case 1:
      return (
        <PageTitle color={color}>
          {title}
        </PageTitle>
      )
  
    case 2:
      return (
        <PageSubtitle color={color} fontStyle={fontStyle} fontWeight={fontWeight}>
          {title}
        </PageSubtitle>
      )
  
    case 3:
      return (
        <BoldTitle color={color} fontStyle={fontStyle} fontWeight={fontWeight}>
          {title}
        </BoldTitle>
      )

    case 4:
      return (
        <div>
          <NextSection color={color}>
            <span>{beforeTitle}</span>
          </NextSection>          
          <PageTitle color={color}>
            {title}
          </PageTitle>
        </div>
      )
  
    default:
      return (
        <SectionTitle color={color}>
          {title}
        </SectionTitle>
      )
  }
  
}

export default Title