import React from "react"

export function Description() {
    return <div className="description">
        <h1>Christian Torres</h1>
        <h3>Frontend Developer</h3>
        <button className="email"><img src={require('./email.png')} alt='email' id="email-image" />Email</button>
        <button className="linked-in"><img src={require('./linkedin.png')} alt='linkedin' id="li-image" />LinkedIn</button>
        <h2>About</h2>
        <p>I am a React frontend developer, currently residing in the Philippines. I have also an interest onto game development, which is my side hustle everytime I get bored. I always try my very best on things that I love doing, that includes being a developer.  </p>
        <h2>Interests</h2>
        <p>Gamer. Musician. University scholar. Old soul. Pixelated stuffs. Weeboo. Manga reader. Travel geek. Photography. Cats.</p>
    </div>
}