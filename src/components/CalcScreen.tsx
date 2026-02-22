import * as React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { mdiAlphaXBox, mdiAlphaYBox, mdiAlphaZBox, mdiAlphaTBox } from '@mdi/js'
import { SvgIcon } from '@mui/material'

import { RootState } from '../rootReducer'

type CalcModeProps = {
  label: string
  tooltip: string
}

const CalcMode = ({ label, tooltip }: CalcModeProps) => (
  <>
    <Tooltip title={tooltip} arrow>
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
