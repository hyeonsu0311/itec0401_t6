import { TextField, Box, Select, MenuItem, InputLabel } from '@mui/material';

const Step1 = ({ formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const postsArray = JSON.parse(localStorage.getItem('posts') || '[]');
    if (initialPost) {
      const updatedPosts = postsArray.map((p) =>
        p.id === initialPost.id
          ? { ...p, title, author, content, date: new Date().toISOString(), location }
          : p
      );
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
    } else {
      const newId = postsArray.length > 0 ? (postsArray.length + 1 ): 1;

      const newPost = {
        id: newId, // Correctly use newId
        title,
        author : user.name,
        content,
        date: new Date().toISOString(),
        location,
        views: 0,
      };
      const newPosts = [newPost, ...postsArray];
      localStorage.setItem('posts', JSON.stringify(newPosts));
      setPosts(newPosts);
    }
    router.push('/community');
  };
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <Box component="form">
          <InputLabel>이름</InputLabel>
      <TextField
        label="이름"
        name="username"
        value={formData.username || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <InputLabel>나이</InputLabel>
      <TextField
        label="나이"
        name="age"
        type="number"
        value={formData.age || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <InputLabel>성별</InputLabel>
      <Select
        label="성별"
        name="gender"
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value="남자">남자</MenuItem>
        <MenuItem value="여자">여자</MenuItem>
        <MenuItem value="그 외">그 외</MenuItem>
        </Select>
        <InputLabel>E-mail</InputLabel>
       <TextField
        label="Email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default Step1;
