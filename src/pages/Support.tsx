import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { tickets } from '../data/mockData';
import { Plus, Search } from 'lucide-react';
import clsx from 'clsx';

export const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || ticket.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-orbitron">Support</h1>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-2 text-white"
              />
            </div>
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-gray-900 rounded-lg px-4 py-2 text-white"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </Card>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <Card key={ticket.id} className="hover:border-primary hover:border">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold mb-1">{ticket.title}</h3>
                <p className="text-gray-400 text-sm">{ticket.description}</p>
              </div>
              <div className="text-right">
                <span
                  className={clsx(
                    'inline-block px-3 py-1 rounded-full text-sm font-medium',
                    {
                      'bg-green-500/20 text-green-500': ticket.status === 'Resolved',
                      'bg-yellow-500/20 text-yellow-500': ticket.status === 'In Progress',
                      'bg-blue-500/20 text-blue-500': ticket.status === 'Open',
                    }
                  )}
                >
                  {ticket.status}
                </span>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};