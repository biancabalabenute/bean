import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const SidebarData = [
  {
    title: "MENU PRINCIPAL",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "CLIENTES",
    icon: <PersonIcon />,
    link: "/cliente"
  },
  {
    title: "PRODUTOS",
    icon: <InventoryIcon />,
    link: "/produto"
  },
  {
    title: "VENDAS",
    icon: <ShoppingCartIcon />,
    link: "/pedidos"
  },
  {
    title: "FORNECEDOR",
    icon: <LocalShippingIcon />,
    link: "/fornecedor"
  },
  {
    title: "CATEGORIA",
    icon: <CategoryIcon />,
    link: "/categoria"
  },
  {
    title: "MARCA",
    icon: <BorderColorIcon />,
    link: "/marca"
  }
];
