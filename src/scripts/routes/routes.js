import DaftarRestorants from '../views/pages/daftar-restorants';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': DaftarRestorants, // default page
  '/daftar-restorants': DaftarRestorants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
