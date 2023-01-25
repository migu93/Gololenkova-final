import Admin from "../pages/Admin";
import {
    ADMIN_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_ACCOUNT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    CART_PAGE, FAVORITE_PAGE,
    LANDING_PAGE,
} from "./consts";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import PersonalAccount from "../pages/PersonalAccount";
import shoppingCartPage from "../pages/ShoppingCartPage";
import favoriteProductsPage from "../pages/FavoriteProductsPage";
import LandingPage from "../pages/LandingPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PERSONAL_ACCOUNT_ROUTE,
        Component: PersonalAccount
    },
    {
        path: CART_PAGE,
        Component: shoppingCartPage
    },
    {
        path: FAVORITE_PAGE,
        Component: favoriteProductsPage
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: LANDING_PAGE,
        Component: LandingPage
    },
]