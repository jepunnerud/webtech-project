'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import players from '@/../public/players.json';
import { Player } from '@/types';
import styles from './page.module.css';

/* ------------ helpers ------------ */
const slug = (club: string) => club.toLowerCase().replace(/\s+/g, '');
const sortByDebut = (a: Player, b: Player) =>
  a.debut_date.localeCompare(b.debut_date);
const sortByMain = (a: Player, b: Player) => {
  const max = (p: Player) =>
    p.teams.reduce((x, y) => (x.appearances > y.appearances ? x : y));
  return max(b).appearances - max(a).appearances;
};

export default function AllViewer() {
  const router      = useRouter();
  const sp          = useSearchParams();
  const narrative   = sp.get('narrative') ?? 'default';
  const posFilter   = sp.get('pos') ?? '';
  const teamFilter  = sp.get('team') ?? '';

  /* ------------ option lists ------------ */
  const positions = useMemo(
    () => Array.from(new Set(players.map(p => p.position))).sort(),
    []
  );
  const teams = useMemo(
    () =>
      Array.from(
        new Set(players.flatMap(p => p.teams.map(t => t.club)))
      ).sort(),
    []
  );

  /* ------------ derived list ------------ */
  const shown = useMemo(() => {
    let list = [...players];
    if (narrative === 'debut') list.sort(sortByDebut);
    else                       list.sort(sortByMain);

    if (narrative === 'position' && posFilter)
      list = list.filter(p => p.position === posFilter);

    if (narrative === 'team' && teamFilter)
      list = list.filter(p => p.teams.some(t => slug(t.club) === teamFilter));

    return list;
  }, [narrative, posFilter, teamFilter]);

  /* ------------ query helper ------------ */
  const setQuery = (q: string) => router.push(`/museum/all?${q}`);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All-Time Legends</h1>

      {/* ---- controls ---- */}
      <div className={styles.controls}>
        <button
          onClick={() => setQuery('')}
          className={narrative === 'default' ? styles.active : ''}
        >
          Main order
        </button>
        <button
          onClick={() => setQuery('narrative=debut')}
          className={narrative === 'debut' ? styles.active : ''}
        >
          Debut date
        </button>

        <div className={styles.selectWrap}>
          <label>Position:</label>
          <select
            value={narrative === 'position' ? posFilter : ''}
            onChange={e =>
              setQuery(
                e.target.value
                  ? `narrative=position&pos=${e.target.value}`
                  : ''
              )
            }
          >
            <option value="">—</option>
            {positions.map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrap}>
          <label>Team:</label>
          <select
            value={narrative === 'team' ? teamFilter : ''}
            onChange={e =>
              setQuery(
                e.target.value
                  ? `narrative=team&team=${e.target.value}`
                  : ''
              )
            }
          >
            <option value="">—</option>
            {teams.map(t => (
              <option key={t} value={slug(t)}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ---- grid ---- */}
      {shown.length === 0 ? (
        <p className={styles.empty}>No players match.</p>
      ) : (
        <div className={styles.grid}>
          {shown.map(p => {
            const main = p.teams.reduce((a, b) =>
              a.appearances > b.appearances ? a : b
            );
            return (
              <Link
                key={p.id}
                href={`/museum/${slug(main.club)}/${p.id}?${sp.toString()}`}
                className={styles.card}
              >
                <Image
                  src={p.image_url}
                  alt={p.name}
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <h3>{p.name}</h3>
                <p className={styles.meta}>
                  {p.position} • {main.club}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
