import { Route, Routes } from "react-router-dom";
import { logo } from "./utils/constants";
import DetailPage from "./pages/detail";
import ListPage from "./pages/list";

function App() {
  return (
    <div dir="rtl">
      <header className="header">
        <img width={120} src={logo} alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
