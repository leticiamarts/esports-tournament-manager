import { Tournament, User, Ticket } from '../types';

export const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'League of Legends Championship',
    game: 'League of Legends',
    date: '2024-04-15',
    prizePool: '$10,000',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070',
    status: 'Upcoming',
  },
  {
    id: 2,
    name: 'CS:GO Masters',
    game: 'Counter-Strike 2',
    date: '2024-04-20',
    prizePool: '$15,000',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070',
    status: 'Ongoing',
  },
  {
    id: 3,
    name: 'Valorant Elite Series',
    game: 'Valorant',
    date: '2024-04-25',
    prizePool: '$8,000',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2070',
    status: 'Finished',
  },
];

export const currentUser: User = {
  id: 1,
  username: 'ProGamer123',
  avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200',
  team: 'Team Elite',
  stats: {
    winRate: 68,
    kdRatio: 2.4,
    tournamentsPlayed: 15,
  },
};

export const tickets: Ticket[] = [
  {
    id: 1,
    category: 'Technical',
    status: 'Open',
    title: 'Stream not working',
    description: 'Unable to connect to stream during match',
    createdAt: '2024-03-15T10:30:00Z',
  },
  {
    id: 2,
    category: 'Dispute',
    status: 'In Progress',
    title: 'Score dispute',
    description: 'Final score was incorrectly recorded',
    createdAt: '2024-03-14T15:45:00Z',
  },
  {
    id: 3,
    category: 'Technical',
    status: 'Resolved',
    title: 'Login issues',
    description: 'Cannot log in to dashboard',
    createdAt: '2024-03-13T09:15:00Z',
  },
];