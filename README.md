# Personal Music Site/Portfolio
This is a self-directed project to showcase my music.

## Goals
To make a site to showcase the music I am currently making, as well as from past projects. This is an extention of my software development portfolio, and I intend to link the two in future. I also wanted to keep my skills using React up to date and use a different hosting platform to Heroku, which is what I usually use. 

## Tech Stack
- React.js
- TypeScript
- Vite

# APIs used


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

Regarding the last point, React is usually best-used for SPAs (Single Page Applications). I knew that I would need multiple pages (one for each project), and so rather than conditionally rendering the content, which could quickly become unwieldy, I eventually came across the *React Router* library which handles exactly this. 


## Reflections

## Future Additions
