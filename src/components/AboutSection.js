import React from 'react';

export default function AboutSection() {
  return (
    <div className="aboutGrid">
      <div className="aboutLeft" data-sr>
        <div className="aboutCard">
          <div className="aboutAvatarWrap">
            <img
              src="/images/profile.png"
              alt="Ritik Sahu"
              className="aboutAvatar"
            />
          </div>
          <div className="aboutCardMeta">
            <h4 className="aboutName">Ritik Sahu</h4>
            <p className="aboutRole">MERN Stack Specialist</p>
          </div>
        </div>
      </div>

      <div className="aboutRight" data-sr>
        <h3 className="aboutHeading">Building scalable web experiences with clean design.</h3>
        <p className="aboutText">
          I am a passionate <strong>MERN Stack Developer</strong> focused on transforming ideas into production-ready web applications. With expertise in designing pixel-perfect, highly responsive interfaces and writing robust backend logic, I build end-to-end solutions that look great and perform flawlessly.
        </p>
        <p className="aboutText">
          My projects range from complex interactive platforms like an <strong>AI Career Assistant</strong> and a real-time <strong>Code Compiler UX</strong> to IoT solutions like the <strong>Smart Parking System</strong> and cultural event portals like <strong>Sinhasth Kumbh</strong>.
        </p>

        <div className="aboutHighlights">
          <div className="highlightCard">
            <div className="highlightIcon">💻</div>
            <div>
              <h5 className="highlightTitle">Full-Stack Core</h5>
              <p className="highlightDesc">Expertise in MongoDB, Express, React, and Node.js.</p>
            </div>
          </div>
          <div className="highlightCard">
            <div className="highlightIcon">🎨</div>
            <div>
              <h5 className="highlightTitle">Modern UI/UX</h5>
              <p className="highlightDesc">Focus on fluid animations, responsiveness, and premium styling.</p>
            </div>
          </div>
          <div className="highlightCard">
            <div className="highlightIcon">🚀</div>
            <div>
              <h5 className="highlightTitle">IoT & Real-time</h5>
              <p className="highlightDesc">Integrating IoT slot sensors, AI LLM roadmaps, and real-time socket flows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
