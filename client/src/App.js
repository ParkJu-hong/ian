import { useMediaQuery } from 'react-responsive';
import DesktopMain from './web/components/DesktopMain';
import MobileMain from './mobile/components/MobileMain'


function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })

  const isWeb = isPc ? <DesktopMain /> : <MobileMain />;

  return (
    <div className="App">
      {isWeb}
    </div>
  );
}

export default App;
