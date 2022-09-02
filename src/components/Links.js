import React from "react"

export function Links() {
    return <div className="links">
        <div className="icons">
        <img src={require('./twitter.png')} alt='twitter' id="twitter-image" />
        <img src={require('./facebook.png')} alt='facebook' id="facebook-image" />
        <img src={require('./instagram.png')} alt='instagram' id="instagram-image" />
        <img src={require('./github.png')} alt='github' id="github-image" />
        </div>
    </div>
}