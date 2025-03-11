export interface Tournament {
  id: number;
  name: string;
  game: string;
  date: string;
  prizePool: string;
  image: string;
  status?: 'Ongoing' | 'Upcoming' | 'Finished';
}

export interface User {
  id: number;
  username: string;
  avatar: string;
  team?: string;
  stats: {
    winRate: number;
    kdRatio: number;
    tournamentsPlayed: number;
  };
}

export interface Ticket {
  id: number;
  category: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  title: string;
  description: string;
  createdAt: string;
}