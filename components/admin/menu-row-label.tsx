'use client'

import React from 'react'

export const MenuRowLabel = ({ data }: { data?: { menuName?: string } }) => {
  return <div>{data?.menuName || 'Untitled Menu'}</div>
}
