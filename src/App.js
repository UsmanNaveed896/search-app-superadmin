import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Header from "./components/header/header";
import SidebarDrawer from './pages/sidebarDrawer/sidebarDrawer'
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Signup/> */}
      <SidebarDrawer/>
    </div>
  );
}

export default App;
