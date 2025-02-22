import Header from "./comps/header";
import SearchHistory from "./comps/searchHistory";
import SearchUserProfile from "./comps/searchUserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const routes = [
  {
    display: "Home",
    value: "home",
    to: "/search",
    element: <SearchUserProfile />,
  },
  {
    display: "History",
    value: "history",
    to: "/history",
    element: <SearchHistory />,
  },
];

// home comp - SearchUserProfile

function App() {
  return (
    <Router>
      <div>
        <Header options={routes} />
        <Routes>
          {routes.map(({ to, element }) => (
            <Route key={to} path={to} element={element} />
          ))}
          <Route path="/" element={<SearchUserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
