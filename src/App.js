import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Heder.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import RecommendsVideoes from './Components/RecommendsVideoes'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import './app.css';
const App = () => {
	return (
		<div className="app">
			<Router>
			  <Header />
                <Switch>
                   <Route path="/search/:searchTerm">
							<div className="app__page">
							<Sidebar />
							<SearchPage />
							</div>
				    </Route>

					<Route path="/">
							<div className="app__page">
							<Sidebar />
							<RecommendsVideoes />
							</div>
					</Route>
				</Switch>
			</Router>
			
		</div>
	);
};

export default App;
