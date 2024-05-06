import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Stepper, Step, StepLabel, Container, Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Navbarprofile from './navbarprofile';


enum StepType {
  Depot = 0,
  Validation = 1,
  Paiement = 2,
  Revision = 3,
}

const CustomStepper = styled(Stepper)({
  '& .MuiStepLabel-label': {
    fontSize: '1.2rem',
  },
  '& .MuiStepIcon-root': {
    fontSize: '2rem',
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
  },
});

const steps = ['Dépôt', 'Validation', 'Paiement', 'Révision'];

const Demande = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openDialog, setOpenDialog] = useState(false); // État pour contrôler l'affichage du Dialog

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleFinish = () => {
    // Ouvre le dialog pour afficher le message de confirmation
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getStepContent = (step: StepType) => {
    switch (step) {
      case 0:
        return (
          <div>
            <TextField label="Nom" fullWidth />
            <TextField label="Adresse" fullWidth />
          </div>
        );
      case 1:
        return (
          <div>
            <TextField label="Numéro de téléphone" fullWidth />
            <TextField label="Adresse e-mail" fullWidth />
          </div>
        );
      case 2:
        return (
          <div>
            <TextField label="Méthode de paiement" fullWidth />
            <TextField label="Numéro de carte" fullWidth />
          </div>
        );
      case 3:
        return (
          <div>
            <Typography>Merci pour votre demande!</Typography>
            <Typography>Nous allons examiner votre soumission.</Typography>
          </div>
        );
      default:
        return 'Étape inconnue';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbarprofile />
        <Container style={{ padding: '40px' }}>
          <CustomStepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </CustomStepper>

          <br />

          {/* Afficher le contenu de l'étape actuelle */}
          {getStepContent(activeStep)}

          <br />

          <div>
            {/* Bouton Précédent */}
            {activeStep > 0 && (
              <Button onClick={handleBack}>Précédent</Button>
            )}

            {/* Bouton Suivant ou Terminer */}
            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Suivant
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleFinish}>
                Terminer
              </Button>
            )}
          </div>

          {/* Dialog pour afficher le message de confirmation */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              <Typography>Vos informations ont été validées avec succès!</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Fermer</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Demande;
