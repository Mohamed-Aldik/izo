import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        
        {
            path: 'products',
            children: [
                {
                    path: '',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'create',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: 'label',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'variation-templates',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: 'import-products',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'opening-product',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: 'import-opening-stock',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'selling-price-group',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: 'categories',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'units',
                    element: <UtilsTablerIcons />
                },
                {
                    path: 'brands',
                    element: <UtilsMaterialIcons />
                },
                {
                    path: 'warranties',
                    element: <UtilsTablerIcons />
                }
            ]
        },
      
    ]
};

export default MainRoutes;
