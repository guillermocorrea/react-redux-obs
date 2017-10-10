import React from 'react';
import {connect} from 'react-redux';
import {fetchUserAction} from '../actions/users';

export function Users(props) {
    return (
        <div>
            <ul>
                {props.users.map(login =>
                    <li key={login}>
                        {login}
                        <button type="button" onClick={() => props.loadUser(login)}>Load User</button>
                    </li>
                )}
            </ul>
            {props.loading && <p>Please wait!</p>}
            {props.current && <User {...props.current} />}
        </div>
    )
}

export function User(props) {
    return (
        <div>
            <img src={props.avatar_url} height="230" width="230" />
            <span>{props.name}</span>
        </div>
    )
}

function mapState(state) {
    return state.users;
}

function mapDispatch(dispatch) {
    return {
        loadUser: (login) => dispatch(fetchUserAction(login))
    };
}

export default connect(mapState, mapDispatch)(Users);