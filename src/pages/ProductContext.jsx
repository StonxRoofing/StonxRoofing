import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Update products in Firestore
  const updateProducts = async (newProducts) => {
    try {
      // Clear existing products in Firestore
      const querySnapshot = await getDocs(collection(db, 'products'));
      const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      // Add new products to Firestore
      const addPromises = newProducts.map(product =>
        setDoc(doc(db, 'products', product.id.toString()), product)
      );
      await Promise.all(addPromises);

      setProducts(newProducts);
    } catch (error) {
      console.error('Error updating products:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts: updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}