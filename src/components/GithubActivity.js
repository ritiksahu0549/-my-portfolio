import React from 'react';

export default function GithubActivity() {
  const username = 'ritiksahu0549';

  return (
    <div className="githubWrapper" data-sr>
      {/* Profile Header Bar */}
      <div className="githubHeaderCard">
        <div className="githubUserMeta">
          <div className="githubAvatarMini">
            <img
              src="/images/profile.png"
              alt="Ritik Sahu"
            />
          </div>
          <div>
            <div className="githubHandleTitle">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="githubHandleLink"
              >
                @{username}
              </a>
              <span className="githubBadgeLive">Active Contributor</span>
            </div>
            <p className="githubSub">
              Public contributions, repositories & open-source activity
            </p>
          </div>
        </div>

        <div className="githubHeaderActions">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="btn btnPrimary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            Visit Profile ↗
          </a>
          <a
            href={`https://github.com/${username}/readme`}
            target="_blank"
            rel="noreferrer"
            className="btn btnGhost"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            README Repo ↗
          </a>
        </div>
      </div>

      {/* Contribution Calendar Heatmap */}
      <div className="githubCard">
        <div className="githubCardHeader">
          <div className="githubCardTitle">
            <svg
              viewBox="0 0 16 16"
              width="18"
              height="18"
              fill="currentColor"
              style={{ color: 'var(--primary2)' }}
            >
              <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4Z" />
            </svg>
            <span>Contribution Calendar</span>
          </div>
          <span className="githubCardTag">Real-time Data</span>
        </div>

        <div className="githubChartScroll">
          <img
            src={`https://ghchart.rshah.org/8b5cf6/${username}`}
            alt={`${username}'s GitHub contribution chart`}
            className="githubChartImg"
            loading="lazy"
          />
        </div>
        <p className="githubChartHint">
          Live daily commit heat-map synced with GitHub profile.
        </p>
      </div>

      {/* GitHub Detailed Stats Widgets Grid */}
      <div className="githubStatsGrid">
        <div className="githubWidgetCard">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&bg_color=0e1424&title_color=06b6d4&text_color=9ca3af&icon_color=8b5cf6&border_color=ffffff15`}
            alt="GitHub Stats"
            className="githubStatImg"
            loading="lazy"
          />
        </div>

        <div className="githubWidgetCard">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&background=0e1424&ring=8b5cf6&fire=06b6d4&currStreakLabel=06b6d4&border=ffffff15`}
            alt="GitHub Streak"
            className="githubStatImg"
            loading="lazy"
          />
        </div>

        <div className="githubWidgetCard">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&bg_color=0e1424&title_color=06b6d4&text_color=9ca3af&border_color=ffffff15`}
            alt="Top Languages"
            className="githubStatImg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
