import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RestaurantsContext } from "./context/RestaurantsContext";
import { restaurants } from "./data/data";
import { DetailsPage } from "./pages/DetailsPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { FavContextProvider } from "./context/FavoritesContext";
import { Modal } from "./components/Modal"

function App() {
  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
      <FavContextProvider>
      <BrowserRouter>
        <Header />
        <Modal/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurant/:id" element={<DetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </FavContextProvider>
    </RestaurantsContext.Provider>
  );
}

export default App;
