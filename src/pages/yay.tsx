import { redirect } from 'next/navigation';
import { FormEventHandler, useEffect, useState } from 'react';

export default function Yay() {
  const [defaultDate, setDefaultDate] = useState("")

  const sendEmail: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const datetime = e.currentTarget.datetime.value
    const dt = convertToCustomFormat(datetime)
    const resp = await fetch(`/api/send?datetime=${dt}`)
    const resp_ = await resp.json()
  }

  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  
    now.setMilliseconds(null as any)
    now.setSeconds(null as any)
  
    setDefaultDate(now.toISOString().slice(0, -1));
  }, [])

  return (
    <main className='gradient'>
      <form className='container' onSubmit={sendEmail}>
        <h2>Yay! Let&apos;s fix a date</h2>
        <input type="datetime-local" name="datetime" defaultValue={defaultDate} min={defaultDate} />
        <button className='button-85'>Book</button>
        <img src='https://media1.tenor.com/m/hZw60xfIvkYAAAAC/tkthao219-bubududu.gif' height={280} width={280} />
      </form>
    </main>
  )
}

function convertToCustomFormat(isoString: string) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };
  
  const date = new Date(isoString);
  const customFormat = date.toLocaleDateString('en-US', options as any);
  
  return customFormat;
}
