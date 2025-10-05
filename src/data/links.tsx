interface LinkTypes {
  artist: string,
  spotify: string | null,
  apple: string | null,
  tidal: string | null,
  deezer: string | null,
  bandcamp: string | null
}

export const links: LinkTypes[] = [
  {
    artist: 'aptist',
    spotify: 'https://open.spotify.com/artist/3iUZV8FaZhxoteUhmkvTy3?si=OjnmS-UeQ1mhDQAUamN4QA',
    apple: 'https://music.apple.com/us/artist/aptist/1555855403',
    tidal: '',
    deezer: '',
    bandcamp: 'https://aptist.bandcamp.com/'
  },
  // {
  //   artist: 'First Swim',
  //   spotify: '',
  //   apple: '',
  //   tidal: '',
  //   deezer: '',
  //   bandcamp: ''
  // },
  {
    artist: 'Paulo Post Future',
    spotify: 'https://open.spotify.com/artist/6NLOQuZbhrOW98PkNwWxLe?si=VVTq_bk7RwKdB0PTNyOxIQ',
    apple: 'https://music.apple.com/us/artist/paulo-post-future/1390306644',
    tidal: 'https://tidal.com/browse/artist/10246985',
    deezer: '',
    bandcamp: 'https://paulopostfuture.bandcamp.com/'
  },
  {
    artist: 'Little Moon',
    spotify: 'https://open.spotify.com/artist/5vPN6DkbKQBkhSuXSixFrI?si=SVMzlkTzSpuRZD3lHOOMFg',
    apple: 'https://music.apple.com/us/artist/little-moon/1059128577',
    tidal: '',
    deezer: '',
    bandcamp: 'https://littlemoonofficial.bandcamp.com/'
  },
]
