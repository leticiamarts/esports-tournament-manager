import React from 'react';

export const Sobre = () => {
    return (
        <div className="min-h-screen bg-background">
            <iframe 
                src="/sobre.html" 
                title="Sobre Nós"
                className="w-full h-full border-none"
                style={{ minHeight: '100vh' }}
            />
        </div>
    );
};