import { Inter } from 'next/font/google'
import { MouseEventHandler } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const onMouseOver: MouseEventHandler<HTMLButtonElement> = (e) =>  {
    const button = e.currentTarget

    const top = getRandomNumber(window.innerHeight);
    const left = getRandomNumber(window.innerWidth);
    console.log(top, left)
    button.style.top = `${top}px`;
    button.style.left = `${left}px`
  }

  return (
    <main className='gradient'>
      <div className='container'>
        <h2>Do you wanna go out with me?</h2>
        <img src='https://media.tenor.com/7hPol1nMsc4AAAAi/tkthao219-bunny.gif' height={280} width={280} />

        <div className='actions'>
          <button className='button-85'>Yes</button>
          <span className='no-btn-cover'>
            <button className='button-85 no-button' onMouseOver={onMouseOver} onClick={onMouseOver}>No</button>
          </span>
        </div>
      </div>
    </main>
  )
}

const getRandomNumber = (num: number) => {
  const randomNumber = Math.random()
  return Math.floor((randomNumber < 0.5 ? 0.5 + randomNumber : randomNumber)  * (num - 100));
};