"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <div id="root">
        {children}
      </div>
    </Provider>
  );
};

export default RootLayoutClient;
