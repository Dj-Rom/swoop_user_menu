import { WelcomePage } from "./pages/WelcomePage";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DishPage } from "./pages/DishPage.tsx";
import { OrderPage } from "./pages/OrderPage.tsx";
import { useEffect } from "react";
import { getAllImages, preloadImages } from "./utils/helpers.ts";
import { menuData } from "./data/menuData.ts";
import { useState } from "react";
import { LoadingSwoopLogo } from "./components/loadingSwoopLogo.tsx";
import { MenuPage } from "./pages/MenuPage.tsx";
function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const load = async () => {
            const allImages = getAllImages(menuData);
            preloadImages(allImages);
            setReady(true);
        };

        load();
    }, []);

    if (!ready) {
        return <LoadingSwoopLogo />;
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/dish/:id" element={<DishPage />} />
                <Route path="order" element={<OrderPage />} />
            </Routes>
        </>
    );
}

export default App;
