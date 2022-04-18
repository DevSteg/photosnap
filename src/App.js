import Navbar from "./components/Navbar";
import BannerOne from "./components/BannerOne";
import "./style/App.scss";
import PhotoBlock from "./components/PhotoBlock";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main>
				<BannerOne />
				<PhotoBlock />
			</main>
		</div>
	);
}

export default App;
