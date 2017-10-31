import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
// Separate local imports from dependencies
import { 
    Time, 
    Line, 
    ProgressBar, 
    BgBar, 
    TimeContainer, 
    Arrow, 
    LineContainer,
    TimelineContainer
} from './Timeline-style';

class Timeline extends Component{
    state = {
        index: 0,
        progress: 0
    };
    
    static propTypes = {
        dates: arrayOf(object)
    }

    renderTimeline = (dates) => {
        return dates.map((date, index) => {
            return (
                <Time 
                    onClick={() => this.handleChangeIndex(index)}
                    className={this.state.index >= index && 'active'}
                    key={index}
                >
                    <span>
                        {date.date}
                    </span>
                </Time>
            )
        })
       
    }
    renderViews = (dates) => {
        return dates.map((date, index) => {
            return (
                <div key={index}>
                    {date.content}
                </div>
            )
        })
    }
    
    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };
    
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;
        const { dates } = this.props;

        let progress = `${index / (dates.length - 1)}`;
    
        return (
            <TimelineContainer>
                <LineContainer>
                    <Arrow left={true} onClick={() => index > 0 && this.handleChangeIndex(index - 1)}/>
                    <Line width={`${dates.length * 30}px`}>
                        <BgBar />
                        <ProgressBar progress={progress}/>
                        <TimeContainer>
                            {this.renderTimeline(dates)}
                        </TimeContainer>
                    </Line>
                    <Arrow onClick={() => index < dates.length - 1 && this.handleChangeIndex(index + 1)}/>
                    
                </LineContainer>
                <SwipeableViews 
                    index={index} 
                    onChangeIndex={this.handleChangeIndex}
                    style={{maxWidth: '90vw'}}
                >
                   {this.renderViews(dates)}
                </SwipeableViews>
            </TimelineContainer>
        );
    }
}

export default Timeline;