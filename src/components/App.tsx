import { Provider } from 'react-redux';
import { store } from '../state';
import ModuleList from './ModuleList';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="wrapperLO">
                <h1 className="titleLO titleSK">Module Search</h1>
                <ModuleList/>
            </div>
        </Provider>
    );
};

export default App;