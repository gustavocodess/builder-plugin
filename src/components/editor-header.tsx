/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button, Divider, IconButton, Switch, Tooltip } from '@material-ui/core'
import {
  ArrowBack,
  LaptopMac,
  PhoneIphone,
  Redo,
  TabletMac,
  Undo,
} from '@material-ui/icons'
import { useObserver } from 'mobx-react'
import React from 'react'
import { ApplicationContext } from '../interfaces/application-context'
import { settings } from '../state/settings'

const resizeButtonStyles: any = {
  height: 38,
  width: 38,
  margin: '0 4px',
  position: 'relative',
  padding: 0,
}

const context: ApplicationContext = require('@builder.io/app-context').default

// Foobar example header component
export const Header = () => {
  return useObserver(() => {
    const isContentPage = context.location.pathname.startsWith('/content/')

    return (
      <React.Fragment>
        {!settings.advancedMode && (
          <style>{`
          .responsive-style-changes-warning { display: none }
          .content-editor-tabs { display: none }
          button[type=button][class*=MuiButtonBase][class*=InsertEditor] { display: none }
        `}</style>
        )}
        <style>{`
          .custom-fields-buttons { display: none }
          .page-main-inner { height: 100vh; overflow: clip; }
          `}</style>
        {isContentPage && (
          <div style={{ background: 'red', width: '100%' }}>
            This is a test header
          </div>
        )}
        <Divider />
      </React.Fragment>
    )
  })
}