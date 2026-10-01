import React from 'react';

const features = [
  {
    title: 'AI Career Assistant',
    desc: 'Resume & interview guidance UI with structured prompts (backend API can be connected later).',
    points: ['Role-based suggestions', 'Roadmap generator', 'Mock interview questions'],
    emoji: '🤖',
  },
  {
    title: 'Code Compiler UI',
    desc: 'Code editor + run/compile flow design (connect to your compiler backend).',
    points: ['Input/output console', 'Language selection UI', 'Test cases ready UX'],
    emoji: '🧑‍💻',
  },
  {
    title: 'Smart Parking System',
    desc: 'IoT-enabled slot booking, real-time vacancy tracking, QR entry pass, and parking analytics.',
    points: ['Live slot occupancy map', 'QR code entry pass & reservation', 'IoT sensor & payment architecture'],
    emoji: '🚗',
  },
  {
    title: 'Sinhasth Kumbh',
    desc: 'Informational portal with event details, schedules & gallery design.',
    points: ['Schedules & highlights', 'Gallery UI', 'Mobile-first layout'],
    emoji: '🕉️',
  },
];

export default function FeatureList() {
  return (
    <div className="featureList">
      {features.map((f) => (
        <div key={f.title} className="feature" data-sr>
          <div className="featureTop">
            <div className="featureEmoji" aria-hidden="true">
              {f.emoji}
            </div>
            <div>
              <h3 className="featureTitle">{f.title}</h3>
              <p className="featureDesc">{f.desc}</p>
            </div>
          </div>
          <ul className="featurePoints">
            {f.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

