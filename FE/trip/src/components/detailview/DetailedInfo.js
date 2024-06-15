import React, { useState } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableRow, Tabs, Tab, Box } from '@mui/material';

function DetailedInfoComponent({ overview, detail }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const infocenterInfo = detail.infocenter || "정보 없음";
  const restDate = detail.restdate || "정보 없음";
  const homepage = detail.homepage || "정보 없음";
  const tel = detail.tel || "정보 없음";
  const address = detail.addr1 || "정보 없음";
  const zipCode = detail.zipcode || "정보 없음";

  // overview의 줄바꿈 처리
  const overviewWithLineBreaks = overview.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Box id="detail" sx={{ maxWidth: 1100, margin: 'auto', mt: 4 }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="공통정보" />
        <Tab label="소개정보" />
      </Tabs>
      {tabValue === 0 && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              개요
            </Typography>
            <Typography variant="body1" component="div">
              {overviewWithLineBreaks}
            </Typography>
          </CardContent>
        </Card>
      )}
      {tabValue === 1 && (
        <Card>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">우편번호</TableCell>
                  <TableCell>{zipCode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">전화명</TableCell>
                  <TableCell>{tel}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">홈페이지</TableCell>
                  <TableCell><a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">주소</TableCell>
                  <TableCell>{address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">문의 및 안내</TableCell>
                  <TableCell>{infocenterInfo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">쉬는 날</TableCell>
                  <TableCell>{restDate}</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      {tabValue === 2 && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              추가 이미지
            </Typography>
            {/* 추가 이미지를 표시하는 부분 */}
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default DetailedInfoComponent;
