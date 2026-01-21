// app/store-provider.tsx
'use client'

import React from 'react'; // Import React for ReactNode
import { Provider } from 'react-redux'
import { store } from '../store/store' // Assuming store.js will be store.ts and exports a typed store

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  // If store is typed, you might pass it as:
  // return <Provider store={store as AppStore}>{children}</Provider>
  return <Provider store={store}>{children}</Provider>;
}
