import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import clsx from 'clsx';

const steps = [
  {
    title: 'Basic Information',
    fields: ['name', 'game', 'date', 'description'],
  },
  {
    title: 'Tournament Format',
    fields: ['format', 'teamSize', 'maxTeams'],
  },
  {
    title: 'Rules & Prizes',
    fields: ['rules', 'prizeDistribution'],
  },
  {
    title: 'Review & Publish',
    fields: [],
  },
];

export const TournamentCreation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    date: '',
    description: '',
    format: 'single-elimination',
    teamSize: '5',
    maxTeams: '16',
    rules: '',
    prizeDistribution: {
      first: 50,
      second: 30,
      third: 20,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 font-orbitron">Create Tournament</h1>

      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={clsx(
              'flex items-center',
              index < currentStep ? 'text-primary' : 'text-gray-400'
            )}
          >
            <div
              className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center mr-2',
                index <= currentStep ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'
              )}
            >
              {index + 1}
            </div>
            <span className="hidden md:block">{step.title}</span>
          </div>
        ))}
      </div>

      <Card className="mb-8">
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tournament Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter tournament name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Game</label>
                <select
                  name="game"
                  value={formData.game}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                >
                  <option value="">Select a game</option>
                  <option value="League of Legends">League of Legends</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="Valorant">Valorant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white h-32"
                  placeholder="Enter tournament description"
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tournament Format</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                >
                  <option value="single-elimination">Single Elimination</option>
                  <option value="double-elimination">Double Elimination</option>
                  <option value="round-robin">Round Robin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <input
                  type="number"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                  min="1"
                  max="10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Maximum Teams</label>
                <input
                  type="number"
                  name="maxTeams"
                  value={formData.maxTeams}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                  min="2"
                  max="64"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tournament Rules</label>
                <textarea
                  name="rules"
                  value={formData.rules}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white h-32"
                  placeholder="Enter tournament rules"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prize Distribution (%)</label>
                <div className="space-y-2">
                  <input
                    type="number"
                    name="prizeDistribution.first"
                    value={formData.prizeDistribution.first}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                    placeholder="1st Place"
                  />
                  <input
                    type="number"
                    name="prizeDistribution.second"
                    value={formData.prizeDistribution.second}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                    placeholder="2nd Place"
                  />
                  <input
                    type="number"
                    name="prizeDistribution.third"
                    value={formData.prizeDistribution.third}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 rounded-lg px-4 py-2 text-white"
                    placeholder="3rd Place"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Review Tournament Details</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Game:</strong> {formData.game}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Format:</strong> {formData.format}</p>
                <p><strong>Team Size:</strong> {formData.teamSize}</p>
                <p><strong>Maximum Teams:</strong> {formData.maxTeams}</p>
                <p><strong>Prize Distribution:</strong></p>
                <ul className="ml-4">
                  <li>1st Place: {formData.prizeDistribution.first}%</li>
                  <li>2nd Place: {formData.prizeDistribution.second}%</li>
                  <li>3rd Place: {formData.prizeDistribution.third}%</li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit" variant="primary">
                Publish Tournament
              </Button>
            ) : (
              <Button type="button" variant="primary" onClick={handleNext}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};