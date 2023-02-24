import { useSelector } from 'react-redux'
import {
  selectPlayerScore,
  selectPlayerHasAdvantage,
  selectPointBeforeWin
} from '../selectors'

export function PlayerScore({ playerId, playerName }) {
  const score = useSelector(selectPlayerScore(playerId))
	const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
	const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId))

  return (
    <div className="player-score">
      <p>{playerName}</p>
			{pointsBeforeWin === null
				? ""
				: ` (encore ${pointsBeforeWin} ${
						pointsBeforeWin > 1 ? "points" : "point"
				})`}
      <p>{(hasAdvantage ? "Avantage - " : "") + score}</p>
    </div>
  )
}
