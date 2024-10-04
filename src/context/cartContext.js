import React, { createContext, useContext } from 'react';

export const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

