import React from 'react'
import { Description } from './Description'
import { Links } from './Links'
import { Photo } from './Photo'


export function Main() {
    return <main>
        <div className='border-box'>
            <Photo />
            <Description />
            <Links />
        </div>
    </main>
}