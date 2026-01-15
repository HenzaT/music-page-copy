// data all releases
import aptistPic from '../assets/aptist/aptist-profile.jpg';
import dreamState from '../assets/aptist/dream-state.jpg';
import someDays from '../assets/aptist/Some-Days.jpeg';
import invisible from '../assets/aptist/Invisible.jpeg';
import stillMorning from '../assets/aptist/Still-Morning.jpeg';
import mainSequence from '../assets/aptist/Main-Sequence.jpeg';
import revolutions from '../assets/aptist/Revolutions.jpg';
import intoSkies from '../assets/aptist/Into-Skies.jpg';
import later from '../assets/aptist/Later.jpeg';
import aprilTea from '../assets/aptist/April-Tea.jpg';
import sundown from '../assets/aptist/Sundown.jpg';
import reflections from '../assets/aptist/Reflections.png';

export interface ReleaseData {
  title: string
  img: string
  alt: string
  tracklist: string[]
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
    released: false
  },
  {
    title: 'Some Days',
    img: someDays,
    alt: 'Some Days Artwork',
    tracklist: [
      'Some Days'
    ],
    released: false
  },
  {
    title: 'Invisible',
    img: invisible,
    alt: 'Invisible Artwork',
    tracklist: [
      'Invisible',
      'Main Sequence II'
    ],
    released: false
  },
  {
    title: 'Still Morning',
    img: stillMorning,
    alt: 'Still Morning Artwork',
    tracklist: [
      'Still Morning',
      'Imprint'
    ],
    released: false
  },
  {
    title: 'Main Sequence',
    img: mainSequence,
    alt: 'Main Sequence Artwork',
    tracklist: [
      'Main Sequence'
    ],
    released: true
  },
  {
    title: 'Revolutions',
    img: revolutions,
    alt: 'Revolutions Artwork',
    tracklist: [
      'Revolutions'
    ],
    released: true
  },
  {
    title: 'Into Skies',
    img: intoSkies,
    alt: 'Into Skies Artwork',
    tracklist: [
      'Into Skies'
    ],
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
    released: true
  },
  {
    title: 'April Tea',
    img: aprilTea,
    alt: 'April Tea Artwork',
    tracklist: [
      'April Tea'
    ],
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
    released: true
  },
  {
    title: 'Reflections',
    img: reflections,
    alt: 'Reflections Artwork',
    tracklist: [
      'Reflections'
    ],
    released: true
  }
]
