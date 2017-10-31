import React from 'react';
import { colors } from '../../resources/styles/colors';
import moment from 'moment';
import Col from '../Col/Col';
import Row from '../Row/Row';
import Paragraph from '../paragraph/Paragraph';
import Image from '../image/Image';
import Title from '../title/Title';

export default class TimeLineDate {
  constructor(date, content) {
    this.date = date;
    this.content = [
      <Title
        title={`${moment(this.date).format("DD")} de ${moment(this.date).format(
          "MMMM"
        )}`}
				color={colors.textPrimary}
				key='title'
			/>,
			<Row key='row'>
				{content.map((item, index) => {
					return (
						<Col
							desktop={1 / content.length}
							tablet={1}
							key={index}
						>
							{item.type === "Paragraph" ? (
								<Paragraph text={item.props.text} />
							) : (
								<Image src={item.props.src} />
							)}
						</Col>
					);
				})}
			</Row>
    ];
  }
}