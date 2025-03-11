import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { currentUser, tournaments } from '../data/mockData';
import { Edit2, Trophy, Award } from 'lucide-react';

export const Profile = () => {
  return (
    <div>
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex items-center gap-6">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold font-orbitron">{currentUser.username}</h1>
            <p className="text-gray-400">{currentUser.team}</p>
          </div>
          <Button variant="outline" className="ml-auto">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <p className="text-gray-400 mb-2">Win Rate</p>
            <div className="text-4xl font-bold text-primary">{currentUser.stats.winRate}%</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 mb-2">K/D Ratio</p>
            <div className="text-4xl font-bold text-primary">{currentUser.stats.kdRatio}</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-gray-400 mb-2">Tournaments</p>
            <div className="text-4xl font-bold text-primary">{currentUser.stats.tournamentsPlayed}</div>
          </div>
        </Card>
      </div>

      {/* Recent Tournaments */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-orbitron">Recent Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{tournament.name}</h3>
                  <p className="text-gray-400">{tournament.game}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(tournament.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-accent font-bold">{tournament.prizePool}</p>
                  <p className="text-sm text-gray-400">{tournament.status}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-4 font-orbitron">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Tournament Victor</h3>
            <p className="text-sm text-gray-400">Won 5 tournaments</p>
          </Card>
          <Card className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Elite Player</h3>
            <p className="text-sm text-gray-400">Maintained 2.0+ K/D</p>
          </Card>
        </div>
      </div>
    </div>
  );
};