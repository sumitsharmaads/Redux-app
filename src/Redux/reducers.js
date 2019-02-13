const mainReducer = (state,action) => {
	switch (action.type) {
    case 'RESET_VALUE':
    	return {
    		...state,
    		currentValue: action.newValue
    	}
    case 'INCREMENT_VALUE':
    	return {
    		...state,
    		currentValue: state.currentValue + action.incrementVal
    	}
    case 'DECREMENT_VALUE':
    	return {
    		...state,
    		currentValue: state.currentValue - action.newValue
    	}
    default:
      return state
  }
}

export default mainReducer;