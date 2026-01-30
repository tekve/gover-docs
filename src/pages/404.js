import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <img src="/img/gover-logo.svg" alt="Gover" style={{ width: 120, marginBottom: '2rem' }} />
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#2563eb' }}>404</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem' }}>
          Page not found. The page you're looking for doesn't exist.
        </p>
        <Link className="button button--primary button--lg" to="/docs/getting-started/intro">
          Back to Documentation
        </Link>
      </main>
    </Layout>
  );
}
