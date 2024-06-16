'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Grid, Container,Typography,Box,LinearProgress } from '@mui/material';
import axios from 'axios';
import Step1 from '@/components/connect/step1';
import Step2 from '@/components/connect/step2';
import Step3 from '@/components/connect/step3';
import Step4 from '@/components/connect/step4';

const steps = [
  { component: Step1, label: 'Step 1' },
  { component: Step2, label: 'Step 2' },
  { component: Step3, label: 'Step 3' },
  { component: Step4, label: 'Step 4' },
];

function NewPostComponent() {
    const router = useRouter();
    
  
    const handleSubmit = (e) => {
      router.push('/');
    };

  
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
  
    useEffect(() => {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);
  
    const handleNext = () => {
      setCurrentStep((prev) => prev + 1);
    };
  
    const handleBack = () => {
      setCurrentStep((prev) => prev - 1);
    };
  
  
  
    const updateFormData = (newData) => {
      const updatedData = { ...formData, ...newData };
      setFormData(updatedData);
      localStorage.setItem('formData', JSON.stringify(updatedData));
    };
  
    const CurrentComponent = steps[currentStep].component;
    const progress = ((currentStep + 1) / steps.length) * 100;
  
    return (
      <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        여행자 정보
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
      <CurrentComponent formData={formData} setFormData={updateFormData} />
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Button
          variant="contained"
          color="secondary"
          disabled={currentStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>

    </Container>
    );
  }
  
  export default NewPostComponent;