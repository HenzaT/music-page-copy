import classNames from 'classnames';

export default function ArtistShadowClasses(originalClass: string, pathname: string) {
  return classNames(originalClass, {
    'aptist-shadow': pathname === '/aptist',
    'ppf-shadow': pathname === '/paulo-post-future',
    'lm-shadow': pathname === '/little-moon'
  });
}
