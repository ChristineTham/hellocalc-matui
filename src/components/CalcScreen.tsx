// @codepen
import * as React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {
  mdiAlphaXBox,
  mdiAlphaYBox,
  mdiAlphaZBox,
  mdiAlphaTBox,
  mdiArrowRightBox,
} from '@mdi/js'
import { SvgIcon } from '@material-ui/core'

import { RootState } from '../rootReducer'

const CalcScreen = () => {
  const currInput = useSelector((state: RootState) => state.input.current)
  const currStack = useSelector((state: RootState) => state.calculator.stack)
  const stack = [
    {
      icon: mdiAlphaTBox,
      value: currStack.t,
    },
    {
      icon: mdiAlphaZBox,
      value: currStack.z,
    },
    {
      icon: mdiAlphaYBox,
      value: currStack.y,
    },
    {
      icon: mdiAlphaXBox,
      value: currStack.x,
    },
    {
      icon: mdiArrowRightBox,
      value: currInput || '0',
      isinput: true,
    },
  ]
  return (
    <List>
      {stack.map((item) => (
        <ListItem key={item.icon} divider selected={item.isinput}>
          <ListItemIcon>
            <SvgIcon>
              <path d={item.icon} />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>
            <Typography variant={item.isinput ? 'h4' : 'h5'} align="right">
              {item.value}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default CalcScreen
