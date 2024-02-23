import { APP_ROUTES } from "@/utils/constants/routes";

const NavbarItem = ({ route }: { route: string }): React.JSX.Element => <div>{route}</div>;

const mapNavbarItems = (route: string) => <NavbarItem route={route} />;

const routePaths = Object.keys(APP_ROUTES).map(route => APP_ROUTES[route].path);

export const Navbar = () => <nav>{routePaths.map(mapNavbarItems)}</nav>;
