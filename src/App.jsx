import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const baseUrl = "https://remote-internship-api-production.up.railway.app";

  const [store, setStore] = useState({
    onboarding: [],
    trendingNFT: [],
  });

  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const [onboarding, trending] = await Promise.all([
        axios.get(`${baseUrl}/selectedCollection`),
        axios.get(`${baseUrl}/trendingNFTs`),
      ]);

      setStore({
        onboarding: onboarding.data.data,
        trendingNFT: trending.data.data,
      });
    } catch (error) {
      console.error("Fetch failed", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetchData();
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        store,
        loading,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
