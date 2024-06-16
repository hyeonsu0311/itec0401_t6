import { TextField, Box, Select, MenuItem, InputLabel } from '@mui/material';

const Step2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <Box component="form">
            <InputLabel>자기소개</InputLabel>
      <TextField
        label="자기소개"
        name="introduction"
        value={formData.introduction || ''}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
            <InputLabel>방문 예정 지역</InputLabel>
            <Select
                  name="continent"
                  fullWidth
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
            <InputLabel>선호 대중교통</InputLabel>
            <Select
        label="선호 대중교통"
        name="gender"
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value="남자">걷기</MenuItem>
        <MenuItem value="남자">버스</MenuItem>
        <MenuItem value="여자">택시</MenuItem>
        <MenuItem value="여자">지하철</MenuItem>
        <MenuItem value="여자">상관없다.</MenuItem>
        </Select>
     
    </Box>
  );
};

export default Step2;
