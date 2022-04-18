import Navbar from "./components/Navbar";
import BannerOne from "./components/BannerOne";
import "./style/App.scss";
import PhotoBlock from "./components/PhotoBlock";
import BottomBanner from "./components/BottomBanner";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main>
				<BannerOne />
				<PhotoBlock />
				<BottomBanner />
			</main>
		</div>
	);
}

export default App;
