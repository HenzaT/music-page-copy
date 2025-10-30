// data all releases

export interface ReleaseData {
  title: string,
  img: string,
  alt: string,
  tracklist: string[],
  released: boolean
}

// array of objects [ {}, {}, {} ]
export const aptistReleases: ReleaseData[] = [
  {
    title: 'Dream State',
    img: './src/assets/aptist/dream-state.jpg',
    alt: 'Dream State Album Artwork',
    tracklist: [
      'Intro',
      'Main Sequence',
      'Dream State',
      'Into Skies',
      "What's The Night For?",
      'Horizon',
      'Invisible',
      'Revolutions',
      'Later',
      'Some Days',
      'April Tea',
      'All Mine.'
    ],
    released: false
  },
  {
    title: 'Some Days',
    img: './src/assets/aptist/Some-Days.jpeg',
    alt: 'Some Days Artwork',
    tracklist: [
      'Some Days'
    ],
    released: false
  },
  {
    title: 'Revolutions',
    img: './src/assets/aptist/Revolutions.jpg',
    alt: 'Revolutions Artwork',
    tracklist: [
      'Revolutions'
    ],
    released: false
  },
  {
    title: 'Invisible',
    img: './src/assets/aptist/I.jpg',
    alt: 'Invisible Artwork',
    tracklist: [
      'Invisible',
      'Main Sequence II'
    ],
    released: false
  },
  {
    title: 'Main Sequence',
    img: './src/assets/aptist/I.jpg',
    alt: 'Main Sequence Artwork',
    tracklist: [
      'Main Sequence'
    ],
    released: false
  },
  {
    title: 'Into Skies',
    img: './src/assets/aptist/Into-Skies.jpg',
    alt: 'Into Skies Artwork',
    tracklist: [
      'Into Skies'
    ],
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
    released: true
  },
  {
    title: 'April Tea',
    img: './src/assets/aptist/April-Tea.jpg',
    alt: 'April Tea Artwork',
    tracklist: [
      'April Tea'
    ],
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
    released: true
  },
  {
    title: 'Reflections',
    img: './src/assets/aptist/Reflections.png',
    alt: 'Reflections Artwork',
    tracklist: [
      'Reflections'
    ],
    released: true
  }
]
