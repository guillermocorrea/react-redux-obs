import {LOAD_STORIES, CLEAR_STORIES} from '../actions';

const stories = [
    {
        "by": "user",
        "id": 1,
        "title": "To Protect Voting, Use Open Source Software",
        "url": "https://mobile.nytimes.com/"
    },
    {
        "by": "user",
        "id": 2,
        "title": "Git: Using Advanced Branching Model",
        "url": "https://mobile.nytimes.com/"
    },
    {
        "by": "user",
        "id": 3,
        "title": "Inside an AI brain",
        "url": "https://mobile.nytimes.com/"
    },
];

const initialState = {
    items: []
};

export function storiesReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_STORIES:
            return {
                items: stories.slice()
            };
        case CLEAR_STORIES:
            return {
                items: []
            };
        default: return state;
    }
}

export default storiesReducer;