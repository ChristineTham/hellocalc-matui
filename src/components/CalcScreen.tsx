import * as React from 'react'
import { useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { mdiAlphaXBox, mdiAlphaYBox, mdiAlphaZBox, mdiAlphaTBox } from '@mdi/js'
import { SvgIcon } from '@material-ui/core'

import { RootState } from '../rootReducer'

const CalcScreen = () => {
  const currStack = useSelector((state: RootState) => state.calculator.stack)
  const stack = [
    // {
    //   icon: mdiArrowRightBox,
    //   value: currInput || '0',
    //   isinput: true,
    // },
    {
      icon: mdiAlphaXBox,
      value: currStack[0],
    },
    {
      icon: mdiAlphaYBox,
      value: currStack[1],
    },
    {
      icon: mdiAlphaZBox,
      value: currStack[2],
    },
    {
      icon: mdiAlphaTBox,
      value: currStack[3],
    },
  ]
  return (
    <>
      <Card>
        <CardHeader title="Results" />
        <CardContent>
          <List>
            {stack.map((item) => (
              <ListItem key={item.icon} divider>
                <ListItemIcon>
                  <SvgIcon>
                    <path d={item.icon} />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6" align="right" display="block" noWrap>
                    {item.value}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default CalcScreen
