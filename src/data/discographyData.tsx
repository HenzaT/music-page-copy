// data all releases
import aptistPic from '../assets/aptist/aptist-pic.jpg';
import dreamState from '../assets/aptist/dream-state.jpg';
import someDays from '../assets/aptist/Some-Days.jpeg';
import mainSequence from '../assets/aptist/Main-Sequence.jpeg';
import revolutions from '../assets/aptist/Revolutions.jpg';
import intoSkies from '../assets/aptist/Into-Skies.jpg';
import later from '../assets/aptist/Later.jpeg';
import aprilTea from '../assets/aptist/April-Tea.jpg';
import sundown from '../assets/aptist/Sundown.jpg';
import reflections from '../assets/aptist/Reflections.png';

export interface ReleaseData {
  title: string,
  img: string,
  alt: string,
  tracklist: string[],
  comingSoon: string, // 'yes', 'no', 'alreadyReleased'
  released: boolean
}

export const profilePic: string = aptistPic;

// array of objects [ {}, {}, {} ]
export const aptistReleases: ReleaseData[] = [
  {
    title: 'Dream State',
    img: dreamState,
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
    img: someDays,
    alt: 'Some Days Artwork',
    tracklist: [
      'Some Days'
    ],
    comingSoon: 'no',
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
    img: mainSequence,
    alt: 'Main Sequence Artwork',
    tracklist: [
      'Main Sequence'
    ],
    comingSoon: 'yes',
    released: false
  },
  {
    title: 'Revolutions',
    img: revolutions,
    alt: 'Revolutions Artwork',
    tracklist: [
      'Revolutions'
    ],
    comingSoon: 'yes',
    released: false
  },
  {
    title: 'Into Skies',
    img: intoSkies,
    alt: 'Into Skies Artwork',
    tracklist: [
      'Into Skies'
    ],
    comingSoon: 'alreadyReleased',
    released: true
  },
  {
    title: 'Later',
    img: later,
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
    img: aprilTea,
    alt: 'April Tea Artwork',
    tracklist: [
      'April Tea'
    ],
    comingSoon: 'alreadyReleased',
    released: true
  },
  {
    title: 'Sundown',
    img: sundown,
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
    img: reflections,
    alt: 'Reflections Artwork',
    tracklist: [
      'Reflections'
    ],
    comingSoon: 'alreadyReleased',
    released: true
  }
]
