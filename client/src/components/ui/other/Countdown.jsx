import { useEffect, useState } from "react"

const Countdown =({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now



      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, onComplete])

  return (
    <div className="max-w-md mx-auto overflow-hidden border-none ">
        <div className="flex items-start gap-2 text-center">
          <TimeUnit value={timeLeft.days} label="Days" /> : 
          <TimeUnit value={timeLeft.hours} label="Hours" /> : 
          <TimeUnit value={timeLeft.minutes} label="Minutes" /> : 
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    </div>
  )
}


function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-center">
        <span className="text-lg font-medium">{value.toString().padStart(2, "0")} </span>
      </div>
      <span className="text-2xs uppercase font-medium text-gray-400">{label}</span>
    </div>
  )
}

export default Countdown;