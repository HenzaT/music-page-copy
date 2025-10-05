// data all releases

export interface ReleaseData {
  title: string,
  img: string,
  alt: string,
  tracklist: string[],
  releaseDate: string | false,
  released: boolean
}

// array of objects [ {}, {}, {} ]
export const aptistReleases: ReleaseData[] = [
  {
    title: 'Dream State',
    img: './src/assets/aptist/Into-Skies.jpg',
    alt: 'Dream State Album Artwork',
    tracklist: [
      'Dream State',
      'Into Skies',
      'Wazukana',
      "What's The Night For?",
      'Close Your Eyes',
      'Horizon',
      'Revolutions',
      'Later',
      'Some Days',
      'April Tea'
    ],
    releaseDate: false,
    released: false
  },
  {
    title: 'Some Days',
    img: './src/assets/aptist/Some-Days.jpeg',
    alt: 'Some Days Artwork',
    tracklist: [
      'Some Days'
    ],
    releaseDate: false,
    released: false
  },
  {
    title: 'Revolutions',
    img: './src/assets/aptist/Into-Skies.jpg',
    alt: 'Revolutions Artwork',
    tracklist: [
      'Revolutions'
    ],
    releaseDate: false,
    released: false
  },
  {
    title: 'Into Skies',
    img: './src/assets/aptist/Into-Skies.jpg',
    alt: 'Into Skies Artwork',
    tracklist: [
      'Into Skies'
    ],
    releaseDate: '28.08.25',
    released: true
  },
  {
    title: 'Later',
    img: './src/assets/aptist/Later.jpeg',
    alt: 'Later Artwork',
    tracklist: [
      'Later',
      'Close Your Eyes'
    ],
    releaseDate: '03.07.25',
    released: true
  },
  {
    title: 'April Tea',
    img: './src/assets/aptist/April-Tea.jpg',
    alt: 'April Tea Artwork',
    tracklist: [
      'April Tea'
    ],
    releaseDate: '09.05.25',
    released: true
  },
  {
    title: 'Sundown',
    img: './src/assets/aptist/Sundown.jpg',
    alt: 'Sundown EP Artwork',
    tracklist: [
      'Sundown',
      'Balance',
      'Think of June',
      'Gatehouse'
    ],
    releaseDate: '09.05.25',
    released: true
  }
]

export const firstSwimReleases: ReleaseData[] = []

export const ppfReleases: ReleaseData[] = [
  {
    title: 'Four',
    img: './src/assets/paulo-post-future/four.jpg',
    alt: 'Four Artwork',
    tracklist: [
      'Four'
    ],
    releaseDate: '27.09.19',
    released: true
  },
  {
    title: 'The Last Time',
    img: './src/assets/paulo-post-future/the-last-time.jpg',
    alt: 'The Last Time Artwork',
    tracklist: [
      'The Last Time'
    ],
    releaseDate: '25.05.19',
    released: true
  },
  {
    title: 'Nothing Happens',
    img: './src/assets/paulo-post-future/nothing-happens.jpg',
    alt: 'Nothing Happens Artwork',
    tracklist: [
      'Nothing Happens'
    ],
    releaseDate: '25.04.19',
    released: true
  },
  {
    title: 'Adrift',
    img: './src/assets/paulo-post-future/adrift.jpg',
    alt: 'Adrift Artwork',
    tracklist: [
      'Adrift'
    ],
    releaseDate: '01.04.19',
    released: true
  },
]

export const littleMoonReleases: ReleaseData[] = [
  {
    title: 'Circadian Rhythm',
    img: './src/assets/little-moon/circadian-rhythm.jpg',
    alt: 'Circadian Rhythm EP Artwork',
    tracklist: [
      'Origami',
      'Howl',
      'Risk',
      'Charlie'
    ],
    releaseDate: '13.05.16',
    released: true
  },
  {
    title: 'Stepping On My Feet',
    img: './src/assets/little-moon/stepping-on-my-feet.jpg',
    alt: 'Stepping On My Feet Artwork',
    tracklist: [
      'Stepping On My Feet'
    ],
    releaseDate: '13.12.15',
    released: true
  },
  {
    title: 'Sapphire Blue',
    img: './src/assets/little-moon/sapphire-blue.jpg',
    alt: 'Sappire Blue Artwork',
    tracklist: [
      'Sapphire Blue'
    ],
    releaseDate: '20.08.15',
    released: true
  },
  {
    title: 'Charlie',
    img: './src/assets/little-moon/charlie.jpg',
    alt: 'Charlie Artwork',
    tracklist: [
      'Charlie'
    ],
    releaseDate: '22.06.15',
    released: true
  },
  {
    title: 'Run Away',
    img: './src/assets/little-moon/run-away.jpg',
    alt: 'Run Away Artwork',
    tracklist: [
      'Run Away'
    ],
    releaseDate: '19.04.15',
    released: true
  },
]
