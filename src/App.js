import { HashRouter, Route, Routes } from "react-router-dom";
import Error404 from "./screens/Error404";
import Home from "./screens/Home";
import Playground from "./screens/Playground";
import { GlobalStyle } from "./style/global"; 
import { ModalProvider } from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";


function App() {
  return (
    <>
    <PlaygroundProvider>
    <ModalProvider>
    <HashRouter>
    <GlobalStyle/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    {/* <Route path="/playground" element={<Playground/>}></Route> */}
    <Route path="/playground/:folderId/:playgroundId" element={<Playground />} />
    <Route path="*" element={<Error404/>}></Route>
   </Routes>
    </HashRouter>
    </ModalProvider>
    </PlaygroundProvider>
   
   
    </>
  );
}

export default App;
