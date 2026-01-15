// data all links

export interface LinkData {
  artist: string,
  spotify: string,
  apple: string,
  tidal: string,
  deezer: string,
  bandcamp: string,
  soundcloud: string,
  [key: string]: string | undefined
}

export const links: LinkData[] =  [
  {
    artist:     'aptist',
    spotify:    'https://open.spotify.com/artist/3iUZV8FaZhxoteUhmkvTy3?si=OjnmS-UeQ1mhDQAUamN4QA',
    apple:      'https://music.apple.com/us/artist/aptist/1555855403',
    tidal:      'https://tidal.com/browse/artist/23719868?u',
    deezer:     'https://www.deezer.com/en/artist/124929342',
    bandcamp:   'https://aptist.bandcamp.com/',
    soundcloud: 'https://soundcloud.com/aptist1'
  }
]
