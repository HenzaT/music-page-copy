import { useLocation } from 'react-router';
import classNames from 'classnames';

export const ArtistColorClasses = (originalClass: string) => {
  const { pathname } = useLocation();
  return classNames(originalClass, {
    'aptist-color': pathname === '/aptist',
    'first-swim-color': pathname === '/first-swim',
    'shamisen-color': pathname === '/shamisen',
    'ppf-color': pathname === '/paulo-post-future',
    'lm-color': pathname === '/little-moon',
    'about-color': pathname === '/about'
  });
}
