
import React from 'react';
import OriginalNavbarItem from '@theme-original/NavbarItem';
import { useUserContext } from '../../context';

const mapping = {
  "Guia": "Completo",
  "Curso Explorador": "Explorador",
};

const CustomNavbarItem = (props) => {
  const { label, type } = props;
  const { userData } = useUserContext();

  //console.log(userData);
  //sempre exibe o custom login
  if (type === "custom-Login") return <OriginalNavbarItem {...props} />;

  //console.log(mapping[label]);
  if (userData.uid === null) return null;

  //Se o usuário não está logado, não exibe nada

  //Se lista de modulos não está definida, não exibe nada
  if (userData.modulos === undefined) return null;

  //Se o módulo não está na lista, não exibe
  if (!userData.modulos.includes(mapping[label]))
    return null; // Hide the item

  // Render the item normally if it passes the condition
  return <OriginalNavbarItem {...props} />;
};

export default CustomNavbarItem;