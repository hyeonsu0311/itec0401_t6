import { useState } from 'react';
import { TextField, Box, Select, MenuItem, InputLabel } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Step3 = ({ formData, setFormData }) => {
  const [localSearchCriteria, setLocalSearchCriteria] = useState({
    minAge: '',
    maxAge: '',
    continent: '',
    travelPeriod: '',
    departureDate: null,
    minBudget: '',
    maxBudget: '',
  });
  const handleDateChange = (date) => {
    setLocalSearchCriteria((prev) => ({ ...prev, departureDate: date }));
  };
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box component="form">
      
      <InputLabel>숙소</InputLabel>
      <Select
        label="성별"
        name="gender"
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value="남자">호텔</MenuItem>
        <MenuItem value="여자">에어비엔비</MenuItem>
        <MenuItem value="그 외">게스트하우스</MenuItem>
        <MenuItem value="그 외">그 외</MenuItem>
        </Select>
      <InputLabel>여행 예산</InputLabel>
      <TextField
        label="여행 예산"
        name="travel_budget"
        value={formData.travel_budget || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <InputLabel>출발 날짜</InputLabel>
      <DatePicker
                label="여행 시작 날짜"
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
    </Box>
    </LocalizationProvider>
  );
};

export default Step3;
