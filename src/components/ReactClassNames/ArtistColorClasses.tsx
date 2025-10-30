import classNames from 'classnames';

export default function ArtistColorClasses(originalClass: string, pathname: string) {
  return classNames(originalClass, {
    'aptist-color': pathname === '/' || '/aptist',
    'first-swim-color': pathname === '/first-swim',
    'about-color': pathname === '/about'
  });
}
