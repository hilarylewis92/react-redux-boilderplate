import React from 'react'
import { render } from 'react-dom'
import './styles';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import AddTodoFormContainer from './containers/AddTodoFormContainer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);
const App = () => {
	return (
		<div className="App">
			<AddTodoFormContainer />
		</div>
	);
}

render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.querySelector('.application')
)