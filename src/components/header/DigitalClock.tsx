import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'styles/components/_digitalClock.scss'

const DigitalClock: React.FC = () => {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const { i18n } = useTranslation()

	const UPDATE_INTERVAL = 1000

	const options = {
		clock: {
			hour: '2-digit' as const,
			minute: '2-digit' as const,
			second: '2-digit' as const
		},
		date: {
			weekday: 'long' as const,
			year: 'numeric' as const,
			month: 'long' as const,
			day: 'numeric' as const
		}
	}

	const updateClockAndDate = () => {
		const nowDate = new Date()
		const formattedTime = new Intl.DateTimeFormat(
			i18n.language,
			options.clock
		).format(nowDate)
		const formattedDate = new Intl.DateTimeFormat(
			i18n.language,
			options.date
		).format(nowDate)

		setTime(formattedTime)
		setDate(formattedDate)
	}

	useEffect(() => {
		updateClockAndDate()
		const intervalId = setInterval(updateClockAndDate, UPDATE_INTERVAL)

		return () => clearInterval(intervalId)
	}, [i18n.language])

	return (
		<div className='clock'>
			<div className='clock__time'>{time}</div>
			<div className='clock__date'>{date}</div>
		</div>
	)
}

export default DigitalClock
