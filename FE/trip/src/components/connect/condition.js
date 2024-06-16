import { useState } from 'react';
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FormCondition = ({ open, setOpen, setSearchCriteria }) => {
  const [localSearchCriteria, setLocalSearchCriteria] = useState({
    minAge: '',
    maxAge: '',
    continent: '',
    travelPeriod: '',
    departureDate: null,
    minBudget: '',
    maxBudget: '',
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalSearchCriteria((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setLocalSearchCriteria((prev) => ({ ...prev, departureDate: date }));
  };

  const handleSearch = () => {
    setSearchCriteria(localSearchCriteria);
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>조건 검색</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="최소나이"
                type="number"
                fullWidth
                name="minAge"
                value={localSearchCriteria.minAge}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="최대나이"
                type="number"
                fullWidth
                name="maxAge"
                value={localSearchCriteria.maxAge}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>여행 지역</InputLabel>
                <Select
                  name="continent"
                  value={localSearchCriteria.continent}
                  onChange={handleChange}
                >
                  <MenuItem value="서울">서울</MenuItem>
                  <MenuItem value="인천">인천</MenuItem>
                  <MenuItem value="대전">대전</MenuItem>
                  <MenuItem value="대구">대구</MenuItem>
                  <MenuItem value="광주">광주</MenuItem>
                  <MenuItem value="부산">부산</MenuItem>
                  <MenuItem value="울산">울산</MenuItem>
                  <MenuItem value="세종특별자치도">세종특별자치도</MenuItem>
                  <MenuItem value="경기도">경기도</MenuItem>
                  <MenuItem value="강원특별자치도">강원특별자치도</MenuItem>
                  <MenuItem value="충청북도">충청북도</MenuItem>
                  <MenuItem value="충청남도">충청남도</MenuItem>
                  <MenuItem value="경상북도">경상북도</MenuItem>
                  <MenuItem value="경상남도">경상남도</MenuItem>
                  <MenuItem value="전북특별자치도">전북특별자치도</MenuItem>
                  <MenuItem value="전라남도">전라남도</MenuItem>
                  <MenuItem value="제주도">제주도</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>여행 기간</InputLabel>
                <Select
                  name="travelPeriod"
                  value={localSearchCriteria.travelPeriod}
                  onChange={handleChange}
                >
                  <MenuItem value="less than a day">1일 이하</MenuItem>
                  <MenuItem value="less than a week">1주일 이하</MenuItem>
                  <MenuItem value="less than two weeks">보름 이하</MenuItem>
                  <MenuItem value="less than a month">한 달 이하</MenuItem>
                  <MenuItem value="less than half a year">6개월 이하</MenuItem>
                  <MenuItem value="etc">그 외</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                label="여행 시작 날짜"
                value={localSearchCriteria.departureDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="최소 예산"
                type="number"
                fullWidth
                name="minBudget"
                value={localSearchCriteria.minBudget}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="최대 예산"
                type="number"
                fullWidth
                name="maxBudget"
                value={localSearchCriteria.maxBudget}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch}>Search</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default FormCondition;
