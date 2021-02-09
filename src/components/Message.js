import React from 'react';
import {formatRelative} from 'date-fns';

const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoUrl = ''
}) => {
    return <div>
        {photoUrl ? <img src={photoUrl}/> : null }
        {displayName ? <p>{displayName}</p> : 'Anonymous'}
        {createdAt?.seconds ? (
            <span>
                {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </span>
        ): null}
        <p>{text}</p>
    </div>
}

export default Message;