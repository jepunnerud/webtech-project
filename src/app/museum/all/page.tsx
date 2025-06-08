'use client'

import { Suspense } from 'react'
import AllViewerInner from './AllViewerInner'

export default function AllViewer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllViewerInner />
    </Suspense>
  )
}
