import { useContext } from "react";
import {Banner,LogIn} from 'components'
import { AuthWindowContext,ThemeContext,BannerContext } from "context";
import MainRoutes from "Routers/MainRoutes";

function App() {
  const {isDark} = useContext(ThemeContext)
  const {isBannerOpen} = useContext(BannerContext)
  const {isWinOpen} = useContext(AuthWindowContext)
  return (
    <div className={isDark?"App dark":"App"}>
        {isBannerOpen && <Banner/>}
        {isWinOpen && <LogIn/>}

        <MainRoutes/>
        
    </div>
  );
}

export default App;
