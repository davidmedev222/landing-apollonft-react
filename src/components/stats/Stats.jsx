import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { useIntersection } from '../../hooks/intersection/useIntersection'

const Stats = () => {
  const { stats } = useContext(GlobalContext)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  const statsLi = stats.map(({ id, title, stat }) => (
    <StatsLi key={id} title={title} stat={stat} isIntersecting={isIntersecting} />
  )) // COMPONENT

  return <ul ref={elementRef} data-opacity data-view={isIntersecting} className='stats'>{statsLi}</ul>
}

const StatsLi = ({ title, stat, isIntersecting }) => {
  return (
    <li data-mask={isIntersecting} className='stats-li'>
      <span className='stats-title'>{title}</span>
      <span className='stats-stat'>{stat}</span>
    </li>
  )
}

export { Stats }
