import React, { Component } from 'react';
import ConversationComponent from './conversation';

class ListConversationsComponent extends Component {
    render() {
        return(
            <div>
                <h3>Conversations</h3>
                <ConversationComponent />
            </div>
        )
    }

}

export default ListConversationsComponent;