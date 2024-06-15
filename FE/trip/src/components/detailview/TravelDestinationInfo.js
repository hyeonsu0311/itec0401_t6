import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import MapComponent from './MapComponent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TravelDestinationInfo({ info, latitude, longitude, address, images }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {info}
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 2 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="상세정보" />
          <Tab label="사진보기" />
          <Tab label="위치정보" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="body1">
            {info}에 대한 상세 정보가 여기에 표시됩니다.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {images && images.length > 0 ? (
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {images.map((image, index) => (
                <Box key={index} p={1}>
                  <img src={image} alt={`여행지 사진 ${index + 1}`} style={{ width: '100%', maxWidth: '300px' }} />
                </Box>
              ))}
            </Box>
          ) : (
            <Typography>사진이 없습니다.</Typography>
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MapComponent latitude={latitude} longitude={longitude} address={address} />
        </TabPanel>
      </Box>
    </div>
  );
}

export default TravelDestinationInfo;
