import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Yay() {
    // const sendEmail = async () => {
    //     debugger
    //     const resp = await fetch("/api/send")
    //     debugger
    //     const resp_ = await resp.json()
    //     debugger
    // }

  return (
    <main className='gradient'>
      <div className='container'>
        <h2>Yay! Let's fix a date</h2>
        {/* <button onClick={sendEmail}>Send Email</button> */}
        <img src='https://media1.tenor.com/m/hZw60xfIvkYAAAAC/tkthao219-bubududu.gif' height={280} width={280} />
      </div>
    </main>
  )
}
