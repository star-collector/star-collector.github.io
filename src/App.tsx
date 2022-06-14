import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from ':pages';

/**
 * @description App root component
 */
export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  </BrowserRouter>
);
