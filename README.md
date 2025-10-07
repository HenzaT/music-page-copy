# Personal Music Site/Portfolio
This is a self-directed project to showcase my music.

## Goals
To make a site to showcase the music I am currently making, as well as from past projects. This is an extention of my software development portfolio, and I intend to link the two in future. I also wanted to keep my skills using React up to date and use a different hosting platform to Heroku, which is what I usually use. 

## Tech Stack
- React.js
- TypeScript
- Vite

## Process
I first set up my React project using Vite: 
```
npm create vite@latest
Selected framework: React
Selected variant: TypeScript
cd music-page
npm install
npm run dev
```
For the website, I decided quickly that I would need a few things:
- no backend (as no data needs to be saved, and no need for user input)
- an in-built music player of some sort, to allow visitors to listen to the music without leaving the site
- a focus on separation of concerns, particularly as there would be many images (album artwork) and links. I didn't want everything to be in the components
- multiple pages

Regarding the last point, I knew that React is usually best-used for SPAs (Single Page Applications). I knew that I would need multiple pages (one for each project), and so rather than conditionally rendering the content, which could quickly become unwieldy, I eventually came across the *React Router* library which handles exactly this. 

For the music player, rather than re-invent the wheel I had a quick look for existing audio player components. I found react-h5-audio-player, which was incredibly easy to set up and use. I then styled it so that it fit in with my overall colour theme. To use it, I have to upload an mp3 and then pass it as a string. However, as I was not comfortable with uploading mp3s of my own songs, I decided that I would in fact require a backend, so that I can safely upload them as secrets. 

I originally had a separate Section component for each of my projects, however it quickly became apparent that I was repeating code and functions (x6 in total!) 

## Reflections
Having taken a bit of a break from React (and admittedly giving myself a project that was too tricky, my kanji app), I was apprehensive about revisiting React. However, this time I took a slower, more simple approach. Instead of being too clever and complex from the beginning, I built one component at a time without worrying about DRY principals. Once the component was working as expected, I then thought about refactoring. This process helped me to really understand props and the design of the app/each component. 
This project has made me really appreciate React for how quickly it is possible to build things and features like conditional rendering of elements/styling.

## Future Additions
- a backend for storing mp3s safely and secretly; I will either use Flask or have a go at Express.js.
- styling of banner image; add more layers, center it vertically
- work out how to render full tracklists for just a specific song
- animate the disc to spin and appear
- conditional styling of music links
- animate overlay menu; when link is clicked, close overlay and load next section at top
