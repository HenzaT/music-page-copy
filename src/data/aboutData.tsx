// data about info

export interface AboutData {
  artist: string,
  text: string,
  text2: string,
  text3: string
}

export const about: AboutData[] = [
  {
    artist: 'aptist',
    text: `My current solo project which merges electronic music with organic elements like guitar and bass,
    as well as atypical features such as odd time signatures.`,
    text2: `Originally from London, I grew up surrounded by a wide range of musical genres, from Japanese pop
    to metal. Whilst at university in Bristol, I was first introduced to electronic music and since then have worked
    on creating original music that blends these diverse influences.`,
    text3: `Although my music is primarily instrumental, I've started to include sampled vocals and am looking to include my
    own vocals on future releases.`
  },
]
