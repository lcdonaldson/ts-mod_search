import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import './ModuleList.css';

const ModulesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchModules } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.modules
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchModules(term);
    };

    return( 
        <div className="searchWrapperLO searchWrapperSK">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={term} 
                    onChange={(e) => setTerm(e.target.value)}
                    className="searchInputLO"
                />
                <button>Search</button>
            </form>
            <div className="scrollable -webkit-scrollbar -webkit-scrollbar-thumb">
                {error && <h3 className="errorSK">{error}</h3>}
                {loading && <h3 className="loadingSK">loading...</h3>}
                {!error && !loading && 
                    data.map((name) => <div key={name} className="searchResultLO searchResultSK">{name}</div>)
                }
            </div>
        </div>
    )
}

export default ModulesList;