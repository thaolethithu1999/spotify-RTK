import { Provider } from "react-redux";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import NavBar from "./components/Navbar";
import Playing from "./components/Playing";
import { Store } from "./redux/Store";

function App() {
  

  return (
    <div className="App bg-white">
      <Provider store={Store}>
        <NavBar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Provider>
    </div>
  );
}

export default App;
