import classNames from 'classnames';

export default function ArtistColorClasses(originalClass: string, pathname: string) {
  return classNames(originalClass, {
    'aptist-color': pathname === '/' || '/aptist',
    'first-swim-color': pathname === '/first-swim',
    'shamisen-color': pathname === '/shamisen',
    'ppf-color': pathname === '/paulo-post-future',
    'lm-color': pathname === '/little-moon',
    'about-color': pathname === '/about'
  });
}
