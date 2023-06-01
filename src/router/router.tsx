import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from '../core/layouts/public/public.component';
import HomeComponent from '../pages/home/home.component';
import FormComponent from '../pages/form/form.component';
import TableComponent from '../pages/table/table.component';
import {Routes} from './routes';
import NotFound from '../pages/not-found/notfound.component';
import AboutComponent from 'pages/about-us/about-us.component';

const router = createBrowserRouter([
    {
        element: <PublicComponent/>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path: Routes.about,
                element: <AboutComponent/>,
            },
            {
                path: Routes.form,
                element: <FormComponent/>,
            },
            {
                path: Routes.table,
                element: <TableComponent/>,
            }
        ],
    },
 
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
