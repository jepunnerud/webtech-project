'use client';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import playersData from '@/../public/players.json';
import styles from './page.module.css';
import { Player } from '@/types';

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '');
const filterList = (list: Player[], type?: string, value?: string) => {
  if (!type || !value) return list;
  if (type === 'position') return list.filter(p => p.position === value);
  if (type === 'country')  return list.filter(p => slug(p.nation) === value);
  if (type === 'team')
    return list.filter(p => p.teams.some(t => slug(t.club) === value));
  return list;
};

export default function PlayerPage({
  params,
}: { params: Promise<{ playerId: string }> }) {
  const { playerId } = use(params);
  const idNum        = Number(playerId);

  const sp           = useSearchParams();
  const filterType   = sp.get('filter') ?? undefined;   // team | position | country
  const filterValue  = sp.get('value')  ?? undefined;
  const qp           = filterType ? `?filter=${filterType}&value=${filterValue}` : '';

  const [textLevel,  setTextLevel]  = useState<'easy'|'medium'|'advanced'>('medium');
  const [textLength, setTextLength] = useState<'short'|'extended'>('short');

  const list      = filterList(playersData, filterType, filterValue);
  const idx       = list.findIndex(p => p.id === idNum);
  if (idx === -1) return <div className={styles.notFound}>Player not found</div>;

  const player    = list[idx];
  const prev      = list[(idx - 1 + list.length) % list.length];
  const next      = list[(idx + 1) % list.length];
  const main = player.teams.reduce((a, b) =>
              a.appearances > b.appearances ? a : b
            );

  const descKey   = `${textLength}_${textLevel}_description` as const;
  const description = player[descKey];

  return (
    <div className={styles.container}>
      {/* back link */}
      <Link href={`/museum/all`} className={styles.backButton}>
        &larr; Back to all players
      </Link>

      {/* filter banner */}
      <p className={styles.filterBanner}>
        Current filter:&nbsp;
        {filterType
          ? `${filterType[0].toUpperCase()+filterType.slice(1)} – ${filterValue}`
          : 'None'}
      </p>

      {/* header (image + bio) */}
      <div className={styles.playerHeader}>
        <div className={styles.playerImage}>
          <Image
            src={player.image_url}
            alt={player.name}
            width={300}
            height={300}
            priority
          />
        </div>

        <div className={styles.playerBasicInfo}>
          <h1>{player.name}</h1>

          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              {/* hyperlinks for position & country */}
              <Link
                href={`/museum/all/${player.id}?filter=position&value=${player.position}`}
                className={styles.linkChip}
              >
                {player.position}
              </Link>

              <Link
                href={`/museum/all/${player.id}?filter=country&value=${slug(player.nation)}`}
                className={styles.linkChip}
              >
                {player.nation}
              </Link>
          
              <p className={styles.born}>
                    Born: {new Date(player.born).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                <p className={styles.debutDate}>
                    Debut for {main.club}: {new Date(player.debut_date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
            </div>
          </div>
        </div>
      </div>

      {/* text complexity & length buttons */}
      <div className={styles.descriptionControls}>
        <div className={styles.buttonGroup}>
          <span>Text Complexity:</span>
          {(['easy','medium','advanced'] as const).map(l => (
            <button
              key={l}
              onClick={() => setTextLevel(l)}
              className={textLevel === l ? styles.active : ''}
            >
              {l[0].toUpperCase()+l.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.buttonGroup}>
          <span>Text Length:</span>
          {(['short','extended'] as const).map(l => (
            <button
              key={l}
              onClick={() => setTextLength(l)}
              className={textLength === l ? styles.active : ''}
            >
              {l[0].toUpperCase()+l.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      {/* stats table with club hyperlinks */}
      <div className={styles.statsSection}>
        <h2>Career Statistics</h2>
        <table className={styles.statsTable}>
          <thead>
            <tr><th>Club</th><th>Apps</th><th>Goals</th></tr>
          </thead>
          <tbody>
            {player.teams.map((t,i)=>(
              <tr key={i}>
                <td>
                  <Link
                    href={`/museum/all/${player.id}?filter=team&value=${slug(t.club)}`}
                    className={styles.linkChip}
                  >
                    {t.club}
                  </Link>
                </td>
                <td>{t.appearances}</td>
                <td>{t.goals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pager */}
      <div className={styles.pager}>
        <Link href={`/museum/all/${prev.id}${qp}`} className={styles.prev}>
          ← {prev.name}
        </Link>
        <Link href={`/museum/all/${next.id}${qp}`} className={styles.next}>
          {next.name} →
        </Link>
      </div>
    </div>
  );
}
