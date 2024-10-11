import { useContext } from "react";
import {Banner,LogIn} from 'components'
import { AuthWindowContext,ThemeContext,BannerContext } from "context";
import MainRoutes from "Routers/MainRoutes";
import Counter from "Hooks/Counter";
import useCounter from "Hooks/Counter";

function App() {
  const {isDark} = useContext(ThemeContext)
  const {isBannerOpen} = useContext(BannerContext)
  const {isWinOpen} = useContext(AuthWindowContext)
  // const [count,increment,decrement] = useCounter()
  return (
    <div className={isDark?"App dark":"App"}>
        {isBannerOpen && <Banner/>}
        {isWinOpen && <LogIn/>}

        
        {/* <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>{count}</h1> */}
        <MainRoutes/>
        
    </div>
  );
}

export default App;
