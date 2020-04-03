import * as React from 'react'
import { useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { mdiAlphaXBox, mdiAlphaYBox, mdiAlphaZBox, mdiAlphaTBox } from '@mdi/js'
import { SvgIcon } from '@material-ui/core'

import { RootState } from '../rootReducer'

type CalcModeProps = {
  label: string
  tooltip: string
}

const CalcMode = ({ label, tooltip }: CalcModeProps) => (
  <>
    <Tooltip title={tooltip} arrow >
      <Chip label={label} size="small" />
    </Tooltip>
    &nbsp;
  </>
)

const CalcScreen = () => {
  const c = useSelector((state: RootState) => state.calculator)
  const stackIcon = [mdiAlphaXBox, mdiAlphaYBox, mdiAlphaZBox, mdiAlphaTBox]

  return (
    <Card>
      <CardHeader title="Results" />
      <CardContent>
        <CalcMode label={c.numberType as string} tooltip="Calculation Type" />
        <CalcMode label={c.outputFormat as string} tooltip="Output Format" />
        <CalcMode label={c.angleMeasure as string} tooltip="Angle Measure" />
        <CalcMode
          label={c.coordinateSystem as string}
          tooltip="Coordinate System"
        />
        <List>
          {c.stack.map((item, i) => (
            <ListItem key={i.toString()} divider>
              <ListItemIcon>
                <SvgIcon>
                  <path d={stackIcon[i]} />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" align="right" display="block" noWrap>
                  {item}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default CalcScreen
