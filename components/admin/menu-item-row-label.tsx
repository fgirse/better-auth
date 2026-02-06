'use client'

import React from 'react'

export const MenuItemRowLabel = ({ data }: { data?: { label?: string; URL?: string } }) => {
  return (
    <div className="flex items-center gap-2">
      <span>{data?.label || 'Untitled Item'}</span>
      {data?.URL && <span className="text-muted-foreground text-sm">→ {data.URL}</span>}
    </div>
  )
}
