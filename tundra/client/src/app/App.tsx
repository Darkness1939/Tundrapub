import { useEffect, useState } from 'react';
import { Header } from '../widgets/ui/header/Header';
import { Outlet } from 'react-router-dom';

export const App = ()  => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}