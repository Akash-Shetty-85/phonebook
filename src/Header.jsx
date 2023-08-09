import React from 'react'

const Header = () => {
  const headerStyle = { textAlign: 'center', background: '#000', color: '#fff', textTransform: 'uppercase', padding: 20 }
  return (
    <div style={headerStyle} className='header'>
      Phone Directory
    </div>
  )
}

export default Header