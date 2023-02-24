import React from 'react'
import { PlayerPoints } from './components/PlayerPoints'
import { Display } from './components/Display'
import { PlayerScore } from './components/PlayerScore'
import { PointScoredButton } from './components/PointScoredButton'
import { ResetButton } from './components/ResetButton'
import { PlayPauseButton } from './components/PlayPauseButton'

function App() {
  return (
    <>
      <PlayerPoints playerId="player1" playerName="Player 1" />
      <PlayerPoints playerId="player2" playerName="Player 2" />
      <Display />
      <PlayerScore playerId="player1" playerName="Joueur 1" />
      <PlayerScore playerId="player2" playerName="Joueur 2" />
      <div className="button-row">
        <PointScoredButton playerId="player1">
          Point Joueur 1
        </PointScoredButton>
        <PointScoredButton playerId="player2">
          Point Joueur 2
        </PointScoredButton>
      </div>
      <div className="button-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </>
  )
}

export default App