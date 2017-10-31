import React                        from 'react';
import { string }                   from 'prop-types';

// Local dependencies
import { Figure, Img, FigCaption }  from './Image-style';

Image.propTypes = {
  src: string,
  width: string,
  height: string,
  margin: string
}

function Image({ src, subtitle, width, height, margin, rectangle }) {

  if(subtitle){
    return(
      <Figure
        imgWidth={width}
        imgHeight={height}
        rectangle={rectangle}
      >
        <Img
          src={src}
          sub={true}
          rectangle={rectangle}
        />
        <FigCaption 
          rectangle={rectangle}
        >
          {subtitle}
        </FigCaption>
      </Figure>
    )
  } 

  return(
    <Figure
      imgWidth={width}
      imgHeight={height}
      imgMargin={margin}
    >
      <Img
        src={src}
      />
    </Figure>
  )
}

export default Image;