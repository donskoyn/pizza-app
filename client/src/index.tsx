import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './modules/app/App';
import { Provider } from 'react-redux';

import store from './modules/app/store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
