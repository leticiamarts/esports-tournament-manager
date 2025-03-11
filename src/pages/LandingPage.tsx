import React from 'react';
import { Trophy, Users, Shield, TrendingUp, Twitch, Youtube, Twitter, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tournaments } from '../data/mockData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Automated Brackets',
    description: 'Effortlessly manage tournament brackets with our automated system',
    icon: Trophy,
  },
  {
    title: 'Centralized Communication',
    description: 'Keep all tournament communication in one place',
    icon: Users,
  },
  {
    title: 'Transparent Prizes',
    description: 'Clear prize distribution and automated payouts',
    icon: Shield,
  },
];

export const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação
    console.log("Logging in:", email, password);
    navigate('/dashboard'); // Redireciona para o Dashboard após login bem-sucedido
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
            Manage Your eSports Tournaments
            <span className="text-primary"> Like a Pro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            The most comprehensive platform for organizing and managing professional eSports tournaments
          </p>
          <Link to="/dashboard">
            <button className="btn-primary">
              Create Tournament
              <TrendingUp className="w-5 h-5" />
            </button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </div>
      </header>

      {/* Featured Tournaments */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-orbitron">Featured Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="card group">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 font-orbitron">{tournament.name}</h3>
              <div className="mb-4 text-gray-400">
                <p>{tournament.game}</p>
                <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
                <p>Prize Pool: {tournament.prizePool}</p>
              </div>
              <Link to="/dashboard">
                <button className="btn-secondary w-full">Join Now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
                />
                <button type="submit" className="w-full bg-primary px-6 py-2 rounded text-white">
                  Login
                </button>
              </form>
            </div>
          </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-orbitron">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="mb-6 flex justify-center">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-orbitron">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-orbitron">About Us</h3>
              <p className="text-gray-400">Professional eSports tournament management platform for organizers and players.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-orbitron">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary">Tournaments</Link></li>
                <li><Link to="/support" className="hover:text-primary">Support</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-orbitron">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/support" className="hover:text-primary">FAQ</Link></li>
                <li><Link to="/support" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/support" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-orbitron">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary"><Twitch className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><Youtube className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-primary"><Discord className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 eSports Tournament Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};