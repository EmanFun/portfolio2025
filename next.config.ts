import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'default',
    domains: ['images.unsplash.com']
  }
}

export default withNextIntl(nextConfig)
