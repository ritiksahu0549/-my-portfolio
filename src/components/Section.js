import React from 'react';

export default function Section({ id, title, kicker, children }) {
  return (
    <section className="section" id={id}>
      <div className="sectionHeader" data-sr>
        {kicker ? <div className="sectionKicker">{kicker}</div> : null}
        <h2 className="sectionTitle">{title}</h2>
      </div>
      <div className="sectionBody">{children}</div>
    </section>
  );
}

