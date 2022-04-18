import Navbar from "./components/Navbar";
import BannerOne from "./components/BannerOne";
import "./style/App.scss";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main>
				<BannerOne />
			</main>
		</div>
	);
}

export default App;
