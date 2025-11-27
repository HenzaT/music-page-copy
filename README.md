# Personal Music Site
This is a self-directed project to showcase my music.

## Goals
To make a site to showcase the music I am currently making. I started this with the intention of showcasing all of my music, both past and present, but decided halfway through that I wanted to only show my current music. This is an extention of my software development portfolio, and I intend to link the two in future. I also wanted to keep my skills using React up to date and use a different hosting platform to Heroku, which is what I usually use. 

## Tech Stack
- React.js
- TypeScript
- Vite
- EmailJS

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

Regarding the last point, I knew that React is usually best-used for SPAs (Single Page Applications). I knew that I would need multiple pages (one for each project), and so rather than conditionally rendering the content, which could quickly become unwieldy, I eventually came across the *React Router* library which handles exactly this. I was able to do a lot of conditional styling for the different pages by using the useLocation hook.

For the music player, rather than re-invent the wheel I had a quick look for existing audio player components. I found react-h5-audio-player, which was incredibly easy to set up and use. I then styled it so that it fit in with my overall colour theme. To use it, I have to upload an mp3 and then pass it as a string. However, as I was not comfortable with uploading mp3s of my own songs, I knew that a backend might be needed after all. Ultimately I decided not to use an audio player, as I wanted to just build a static page.

I kept all my data (song info, artwork) in a separate file and then imported it into my components. This helped with separation of concerns, and also allows me to easily update the site as I release more music - for each release, I have a boolean for whether a song has been released or not, so simply switching it to 'true' updates each component.

I wanted to implement a contact form, which normally I would need a server for. Instead, I searched for client-side only options and came across EmailJS. I liked how easy it was to integrate and I additionally added some validation (albeit client-side only) and anti-spam features like recaptcha. 

Having played around with CSSTransitions in my last project, I wanted to include animations again. I opted to use React Spring to transition between routes.

## Reflections
Having taken a bit of a break from React (and admittedly giving myself a project that was too tricky, my kanji app), I was apprehensive about revisiting React. However, this time I took a slower, more simple approach. Instead of being too clever and complex from the beginning, I built one component at a time without worrying about DRY principals. Once the component was working as expected, I then thought about refactoring. This process helped me to really understand props and the design of the app/each component. 
This project has made me really appreciate React for how quickly you can build things and features like conditional rendering of elements/styling.

## Future Additions
- Google analytics to track site traffic
