import { useLocation } from 'react-router';
import classNames from 'classnames';

export const ArtistShadowClasses = (originalClass: string) => {
  const { pathname } = useLocation();
  return classNames(originalClass, {
    'aptist-shadow': pathname === '/aptist',
    'ppf-shadow': pathname === '/paulo-post-future',
    'lm-shadow': pathname === '/little-moon'
  });
}
