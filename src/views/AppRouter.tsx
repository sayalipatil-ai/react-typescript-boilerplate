
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CarrierRoute } from '../components/Carriers';
import { HomeRoute } from '../components/Home';
import { OfficeRoute } from '../components/Offices';


const routes = [
  HomeRoute,
  CarrierRoute,
  OfficeRoute,
];

const AppRouter: React.FC = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default AppRouter;


