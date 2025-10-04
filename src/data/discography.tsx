// data all releases

interface Release {
  title: string,
  img: string,
  alt: string,
  tracklist: string[],
  releaseDate: string | false,
  released: boolean
}

// array of objects [ {}, {}, {} ]
export const aptistReleases: Release[] = [
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
