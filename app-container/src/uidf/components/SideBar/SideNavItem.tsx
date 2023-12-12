import { NavLink } from 'react-router-dom'
import { RouteProps } from '../../data/sideBarData';

export const SideNavItem = ({ text, path, cName }: RouteProps) => {
  return (
    <NavLink
      className={({ isActive }) => `side-nav-item ${cName} ${isActive ? 'active' : ''}`}
      to={path}
    >
      {text}
    </NavLink>
  )
}
