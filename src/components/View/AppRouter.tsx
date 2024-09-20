
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CarrierRoute } from '../Carriers';
import { HomeRoute } from '../Home';
import { OfficeRoute } from '../Offices';


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


