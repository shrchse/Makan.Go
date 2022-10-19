import Favorite from '../views/pages/favorite';
import List from '../views/pages/recomended';
import Detail from '../views/pages/detail';

const routes = {
  '/': List,
  '/list': List,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
