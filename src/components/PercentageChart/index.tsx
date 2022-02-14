import React from 'react'
import { CircularProgress, Typography, Box } from '@material-ui/core'

import useStyles from './styles'

type PercentageChartProps = {
  progress: number
  color: string
}

const PercentageChart: React.FC<PercentageChartProps> = ({
  progress,
  color
}) => {
  const classes = useStyles()

  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress
        className={classes.progressBarColor}
        style={{ color: color }}
        variant='determinate'
        value={progress}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h2' component='div'>{`${Math.round(
          progress
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

export default PercentageChart
