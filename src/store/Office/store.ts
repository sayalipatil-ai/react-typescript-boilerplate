// src/stores/store.ts
import { useState, useEffect } from 'react';
import { useImmer } from 'use-immer'; // Optional for immutable state updates
import { fetchOffices } from './services';
import { Office } from './types';

type OfficesState = {
  offices: Office[];
  isLoading: boolean;
  isError: boolean;
};

const useOfficesStore = () => {
  const [officesStore, updateOfficesStore] = useImmer<OfficesState>({
    offices: [],
    isLoading: true,
    isError: false,
  });

  async function fetchAndSetOffices() {
    try {
      const offices: Office[] = await fetchOffices();
      updateOfficesStore((draft) => {
        draft.offices = offices;
        draft.isLoading = false;
      });
    } catch (error) {
      updateOfficesStore((draft) => {
        draft.isError = true;
        draft.isLoading = false;
      });
    }
  }

  // Fetch offices data when the component mounts
  useEffect(() => {
    fetchAndSetOffices();
  }, []); // Empty dependency array ensures it runs once

  return {
    officesStore,
    fetchAndSetOffices,
  };
};

export default useOfficesStore;
