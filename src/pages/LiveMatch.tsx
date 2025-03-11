import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AlertTriangle, Send } from 'lucide-react';
import clsx from 'clsx';

export const LiveMatch = () => {
  const [chatMessage, setChatMessage] = useState('');

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col">
      <div className="flex-1 flex gap-4">
        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Stream Player */}
          <Card className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <p className="text-gray-400">Stream will start soon...</p>
            </div>
          </Card>

          {/* Match Info */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-orbitron">Team Alpha vs Team Beta</h2>
                <p className="text-gray-400">Quarter Finals - Best of 3</p>
              </div>
              <Button variant="outline" className="text-red-500 border-red-500">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Issue
              </Button>
            </div>
          </Card>

          {/* Match Stats */}
          <Card>
            <h3 className="text-xl font-bold mb-4 font-orbitron">Match Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Team Alpha</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Kills</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deaths</span>
                    <span className="font-bold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score</span>
                    <span className="font-bold text-primary">13</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Team Beta</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Kills</span>
                    <span className="font-bold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deaths</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score</span>
                    <span className="font-bold text-accent">11</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Sidebar */}
        <Card className="w-80 flex flex-col">
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Player123</p>
              <p className="bg-gray-700 rounded-lg p-2">Great match so far!</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Spectator456</p>
              <p className="bg-gray-700 rounded-lg p-2">Team Alpha is dominating!</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-900 rounded-lg px-4 py-2 text-white"
              />
              <Button variant="primary" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};