import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'

const Stats = () => {
  const { stats } = useContext(GlobalContext)

  const statsLi = stats.map(({ id, title, stat }) => (
    <StatsLi key={id} title={title} stat={stat} />
  )) // COMPONENT

  return <ul className='stats'>{statsLi}</ul>
}

const StatsLi = ({ title, stat }) => {
  return (
    <li className='stats-li'>
      <span className='stats-title'>{title}</span>
      <span className='stats-stat'>{stat}</span>
    </li>
  )
}

export { Stats }
