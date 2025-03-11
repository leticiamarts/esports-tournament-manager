import { Plus, Edit2, Eye } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { tournaments } from '../data/mockData';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-orbitron">Tournament Dashboard</h1>
        <Link to="/tournaments/create">
          <Button variant="primary" size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Create Tournament
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="relative">
            <div className="absolute top-4 right-4 z-10">
                <span  className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium',
                {
                'bg-[#22c55e] text-[#0c2e18]': tournament.status === 'Ongoing',
                  'bg-[#3b82f6] text-[#102341]': tournament.status === 'Upcoming',
                  'bg-[#6b7280] text-[#2a2b2c]': tournament.status === 'Finished',
                }
                )}>
                {tournament.status}
                </span>
            </div>
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 font-orbitron">{tournament.name}</h3>
            <div className="mb-4 text-gray-400">
              <p>{tournament.game}</p>
              <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
              <p>Prize Pool: {tournament.prizePool}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="primary" size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-2" />
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};