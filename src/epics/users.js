import {Observable} from 'rxjs';
import {FETCH_USER, fetchUserFulfilledAction} from '../actions/users';

export function fetchUserEpic(action$) {
    return action$.ofType(FETCH_USER)
        .switchMap(({payload}) => {
            return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
                .map(user => {
                    return fetchUserFulfilledAction(user);
                })
        })
}