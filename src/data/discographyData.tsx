// data all releases

export interface ReleaseData {
  title: string,
  img: string,
  alt: string,
  tracklist: string[],
  comingSoon: string, // 'yes', 'no', 'alreadyReleased'
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
    comingSoon: 'no',
    released: false
  },
  {
    title: 'Some Days',
    img: './src/assets/aptist/Some-Days.jpeg',
    alt: 'Some Days Artwork',
    tracklist: [
      'Some Days'
    ],
    comingSoon: 'no',
    released: false
  },
  {
    title: 'Revolutions',
    img: './src/assets/aptist/Revolutions.jpg',
    alt: 'Revolutions Artwork',
    tracklist: [
      'Revolutions'
    ],
    comingSoon: 'yes',
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
    comingSoon: 'no',
    released: false
  },
  {
    title: 'Main Sequence',
    img: './src/assets/aptist/I.jpg',
    alt: 'Main Sequence Artwork',
    tracklist: [
      'Main Sequence'
    ],
    comingSoon: 'yes',
    released: false
  },
  {
    title: 'Into Skies',
    img: './src/assets/aptist/Into-Skies.jpg',
    alt: 'Into Skies Artwork',
    tracklist: [
      'Into Skies'
    ],
    comingSoon: 'alreadyReleased',
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
    comingSoon: 'alreadyReleased',
    released: true
  },
  {
    title: 'April Tea',
    img: './src/assets/aptist/April-Tea.jpg',
    alt: 'April Tea Artwork',
    tracklist: [
      'April Tea'
    ],
    comingSoon: 'alreadyReleased',
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
    comingSoon: 'alreadyReleased',
    released: true
  },
  {
    title: 'Reflections',
    img: './src/assets/aptist/Reflections.png',
    alt: 'Reflections Artwork',
    tracklist: [
      'Reflections'
    ],
    comingSoon: 'alreadyReleased',
    released: true
  }
]
