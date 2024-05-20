import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Favorite from '@mui/icons-material/Favorite';

const Test = () => {


  return (
    <div>
      <Card sx={{
        width: 800,
        position: 'relative',
        display: 'flex'

      }}>
        <Card sx= {{
          alignItems: 'center'
        }}>
        </Card>
        <Card sx= {{
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 2,
          gap: 1.5,
          
        }}>
          <Box sx= {{
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
          <Typography sx= {{
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            Content1
          </Typography>
          <Typography>
            Content2
          </Typography>
          </Box>
          <Typography>
            Content3
          </Typography>
        </Card>
      </Card>
    </div>
  )
}

export default Test;