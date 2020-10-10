function calculateScore(player) {
  if (player.position === 'QB') {
    return (player.stats.passing.yards / 25 +
      player.stats.passing.touchdowns * 6 +
      player.stats.passing.interceptions * -3 +
      player.stats.rushing.yards / 10 +
      player.stats.rushing.touchdowns * 6 +
      player.stats.rushing.fumbles * -3)
  } else if (player.position === 'RB') {
    return (player.stats.rushing.yards / 10 +
      player.stats.rushing.touchdowns * 6 +
      player.stats.rushing.fumbles * -3 +
      player.stats.receiving.receptions * 1 +
      player.stats.receiving.yards / 10 +
      player.stats.receiving.touchdowns * 6 +
      player.stats.receiving.fumbles * -3 +
      player.stats.return.kickreturn.yards / 15 +
      player.stats.return.kickreturn.touchdowns * 6 +
      player.stats.return.kickreturn.fumbles * -3 +
      player.stats.return.puntreturn.yards / 15 +
      player.stats.return.puntreturn.touchdowns * 6 +
      player.stats.return.puntreturn.fumbles * -3)
  } else if (player.position === 'WR') {
    return (player.stats.rushing.yards / 10 +
      player.stats.rushing.touchdowns * 6 +
      player.stats.rushing.fumbles * -3 +
      player.stats.receiving.receptions * 1 +
      player.stats.receiving.yards / 10 +
      player.stats.receiving.touchdowns * 6 +
      player.stats.receiving.fumbles * -3 +
      player.stats.return.kickreturn.yards / 15 +
      player.stats.return.kickreturn.touchdowns * 6 +
      player.stats.return.kickreturn.fumbles * -3 +
      player.stats.return.puntreturn.yards / 15 +
      player.stats.return.puntreturn.touchdowns * 6 +
      player.stats.return.puntreturn.fumbles * -3)
  } else if (player.position === 'TE') {
    return (player.stats.receiving.receptions * 1 +
      player.stats.receiving.yards / 10 +
      player.stats.receiving.touchdowns * 6 +
      player.stats.receiving.fumbles * -3)
  } else { return 0 }
}
module.exports = calculateScore

// create seprate functions for each way of scoring
  // i.g calculate rushing score, calculate passing score etc.