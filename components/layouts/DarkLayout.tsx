import React, { FC, PropsWithChildren } from 'react'

export const DarkLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding:'10px',

    }}>
        <h2>Dark-Layout</h2>
        <div>
            {children}

        </div>
    </div>
  )
}
