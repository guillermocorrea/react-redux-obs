import {Observable} from 'rxjs';
import {LOAD_STORIES, clear} from '../actions';

export function loadStoriesEpic(action$) {
    return action$.ofType(LOAD_STORIES)
        .switchMap(() => {
            return Observable.of(clear()).delay(2000)
        });
        // .do(action => console.log(action))
        // .ignoreElements();
}