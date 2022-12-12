import './App.css';
import AsideLeft from './components/AsideLeft/AsideLeft';
import AsideRight from './components/AsideRight/AsideRight';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
	return (
		<>
			<AsideLeft />
			<Header />
			<Main />
			<AsideRight />
		</>
	);
};

export default App;
