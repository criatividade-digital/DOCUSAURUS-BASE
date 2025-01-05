import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import User from '@site/src/components/NavbarItems/user';
import Cursos from '@site/src/components/NavbarItems/cursos';

export default {
  ...ComponentTypes,
  'custom-Login': User,
  'custom-Curso': Cursos,
};