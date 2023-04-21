import Link from 'next/link'
import React from 'react'

export default function PageHome() {
  return <Link href={{ pathname: '/product/list' }}>View Product List</Link>
}
