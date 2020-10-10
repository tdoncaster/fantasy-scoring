function passingScore(player) {  // passing score function
    return (
        player.stats.passing.yards / 25 +
        player.stats.passing.touchdowns * 6 +
        player.stats.passing.interceptions * -3
    )
}
function rushingScore(player) { // rushing score function
    return (
        player.stats.rushing.yards / 10 +
        player.stats.rushing.touchdowns * 6 +
        player.stats.rushing.fumbles * -3
    )
}

function returningScore(player) { // returning score function
    return (
        player.stats.return.kickreturn.yards / 15 +
        player.stats.return.kickreturn.touchdowns * 6 +
        player.stats.return.kickreturn.fumbles * -3 +
        player.stats.return.puntreturn.yards / 15 +
        player.stats.return.puntreturn.touchdowns * 6 +
        player.stats.return.puntreturn.fumbles * -3
    )
}

function recievingScore(player) { // recieve score function
    return (
        player.stats.receiving.receptions * 1 +
        player.stats.receiving.yards / 10 +
        player.stats.receiving.touchdowns * 6 +
        player.stats.receiving.fumbles * -3
    )
}

function calculateScore(player) {
    if (player.position === 'QB') {
        return (passingScore(player) + rushingScore(player))
    } else if (player.position === 'RB' || player.position === 'WR') {
        return (rushingScore(player) + recievingScore(player) + returningScore(player))
    } else if (player.position === 'TE') {
        return (recievingScore(player))
    } else { return 0 }
}
module.exports = calculateScore
