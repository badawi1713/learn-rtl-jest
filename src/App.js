import { Layout } from "components";
import { Confirmation, Home, Page404, Summary } from "pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

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
