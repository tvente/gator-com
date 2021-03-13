import React, { useState } from 'react';
import {ReactComponent as ThumbsUp} from '../assets/thumbsup.svg';
import {ReactComponent as ThumbsUpFilled} from '../assets/thumbsup_filled.svg';

const RatingState = {
    UNRATED: 0,
    THUMBSUP: 1,
    THUMBSDOWN: 2,
}

function Rating() {
    const [ratingState, setRatingState] = useState(RatingState.UNRATED);

    const thumbsUpProps = {className: 'thumbsUp', width: '24px', height: '24px', onClick: () => setRatingState(RatingState.THUMBSUP)};
    const thumbsDownProps = {...thumbsUpProps, className: 'thumbsDown', onClick: () => setRatingState(RatingState.THUMBSDOWN)};

    return (
        <span>
            {ratingState === RatingState.THUMBSUP ? <ThumbsUpFilled {...thumbsUpProps} fill='#518BE8'/> : <ThumbsUp {...thumbsUpProps}/>}
            {ratingState === RatingState.THUMBSDOWN ? <ThumbsUpFilled {...thumbsDownProps} fill='#518BE8'/> : <ThumbsUp {...thumbsDownProps}/>}
        </span>
    );
}
export default Rating;