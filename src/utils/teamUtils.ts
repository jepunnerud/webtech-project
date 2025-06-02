export const getTeamName = (teamSlug: string): string => {
  const teamMap: Record<string, string> = {
    arsenal: 'Arsenal',
    chelsea: 'Chelsea',
    liverpool: 'Liverpool',
    manchesterunited: 'Manchester United',
  }
  return teamMap[teamSlug] || teamSlug
}
