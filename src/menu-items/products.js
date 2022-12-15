// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const products = {
    id: 'products',
    title: 'products',
    type: 'group',
    children: [
        {
            id: 'product',
            title: 'products',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'products',
                    title: 'List Products',
                    type: 'item',
                    url: '/products',
                    breadcrumbs: false
                },
                {
                    id: 'create',
                    title: 'Add Product',
                    type: 'item',
                    url: '/products/create',
                    breadcrumbs: false
                },
                {
                    id: 'labels',
                    title: 'Print Labels',
                    type: 'item',
                    url: '/products/label',
                    breadcrumbs: false
                },
                {
                    id: 'variations',
                    title: 'Vsariations',
                    type: 'item',
                    url: '/products/variation-templates',
                    breadcrumbs: false
                },
                {
                    id: 'import',
                    title: 'Import Products',
                    type: 'item',
                    url: '/products/import-products',
                    breadcrumbs: false
                },
                {
                    id: 'opening',
                    title: 'First Term Merchandise',
                    type: 'item',
                    url: '/products/opening-product',
                    breadcrumbs: false
                },
                {
                    id: 'stock',
                    title: 'Import Opening Stock',
                    type: 'item',
                    url: '/products/import-opening-stock',
                    breadcrumbs: false
                },
                {
                    id: '/selling',
                    title: 'Selling Price Group',
                    type: 'item',
                    url: '/products/selling-price-group',
                    breadcrumbs: false
                },
                {
                    id: 'categories',
                    title: 'Categories',
                    type: 'item',
                    url: '/products/categories',
                    breadcrumbs: false
                },
                {
                    id: 'units',
                    title: 'Units',
                    type: 'item',
                    url: '/products/units',
                    breadcrumbs: false
                },
                {
                    id: 'brands',
                    title: 'Brands',
                    type: 'item',
                    url: '/products/brands',
                    breadcrumbs: false
                },
                {
                    id: 'warranties',
                    title: 'warranties',
                    type: 'item',
                    url: '/products/warranties',
                    breadcrumbs: false
                },
            ]
        }
    ]
};

export default products;
