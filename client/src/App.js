import { useMediaQuery } from 'react-responsive';
import DesktopMain from './web/components/DesktopMain';
import MobileMain from './mobile/components/MobileMain';
import ManagerMain from './web/components/managerComponents/ManagerMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })

  const isWeb = isPc ? <DesktopMain /> : <MobileMain />;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={isWeb} />
        <Route path="/manager" element={<ManagerMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
