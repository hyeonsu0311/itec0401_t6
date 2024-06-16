import { TextField, Box, Button, Typography, Select, MenuItem, InputLabel  } from '@mui/material';

import { useState } from 'react';

const Step5 = ({ formData, setFormData }) => {
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
        setFormData({ photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box component="form">
     
      
     <InputLabel>선호하는 연락 방식</InputLabel>
     <Select
        label="성별"
        name="gender"
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value="남자">전화</MenuItem>
        <MenuItem value="여자">문자</MenuItem>
        <MenuItem value="그 외">상관없다.</MenuItem>
        </Select>
      <InputLabel>비상시 연락할 이름</InputLabel>
      <TextField
        label="비상시 연락할 이름"
        name="emergency_contact_name"
        value={formData.emergency_contact_name || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <InputLabel>비상연락처</InputLabel>
      <TextField
        label="비상연락처"
        name="emergency_contact_phone"
        value={formData.emergency_contact_phone || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <InputLabel>건강 이상 상태</InputLabel>
      <TextField
        label="건강 이상 상태"
        name="health_status"
        value={formData.health_status || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
     
      <Box mt={2}>
        <Typography variant="h6">자신을 소개할 사진을 업로드 하세요.</Typography>
        <input
          label="Photo"
         name="photo"
          accept="image/*"
          style={{ display: 'none' }}
          id="photo-upload"
          type="file"
          onChange={handlePhotoChange}
        />
        <label htmlFor="photo-upload">
          <Button variant="contained" color="primary" component="span">
            Upload Photo
          </Button>
        </label>
        {photo && (
          <Box mt={2}>
            <img src={photo} alt="Uploaded Photo" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Step5;
