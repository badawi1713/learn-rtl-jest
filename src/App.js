import { Layout } from "components";
import { Confirmation, Home, Page404, Summary } from "pages";
import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};

export default App;
