import React from 'react'
import { LoadedImg } from './LoadedImg/LoadedImg'
import { ToggleLoading } from './ToggleLoading/ToggleLoading'

export const ToggleImg = ({loading, id}) => {
  
  const load = loading ? <ToggleLoading /> : <LoadedImg id={id} />;

  return (
    <React.Fragment>
      {load}
    </React.Fragment>
  )
}
