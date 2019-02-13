import {createStore} from 'redux';
import mainReducer from './reducers';

const configureStore = () => {
	return createStore(mainReducer,{currentValue:110});
}

export default configureStore;
