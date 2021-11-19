import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, decription, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={decription} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: ' Welcome to TechCube',
  description: 'We sell best products for cheap',
  keywords: 'electronics, buy electronics, cheap electronics',
}

export default Meta
