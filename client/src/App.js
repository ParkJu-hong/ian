import { useMediaQuery } from 'react-responsive';
import DesktopMain from './web/components/DesktopMain';
import MobileMain from './mobile/components/MobileMain';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })

  const isWeb = isPc ? <DesktopMain /> : <MobileMain />;

  return (
    <BrowserRouter>
      <div className="App">
        {isWeb}
      </div>
    </BrowserRouter>
  );
}

export default App;
