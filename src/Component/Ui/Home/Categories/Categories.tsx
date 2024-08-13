import { Box, Container, Stack, Typography } from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const categoryItem = [
  {
    id: 1,
    icon: (
      <MedicationIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Best Deals",
  },
  {
    id: 2,
    icon: (
      <SanitizerIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Germ Pads",
  },
  {
    id: 3,
    icon: (
      <MedicalInformationIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Accessories",
  },
  {
    id: 4,
    icon: (
      <LocalHospitalIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Medicine Cap",
  },
  {
    id: 5,
    icon: (
      <EarbudsIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Dental Item",
  },
  {
    id: 6,
    icon: (
      <MedicalServicesIcon
        sx={{
          width: "50px",
          height: "50px",
          color: "primary.main",
        }}
      />
    ),
    title: "Medicine",
  },
];

const Categories = () => {
  return (
    <Container
      sx={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Stack direction="row" gap={2} justifyContent="space-between">
        {categoryItem.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box>{item.icon}</Box>
            <Box>
              <Typography variant="h6" component="h1" fontWeight={400}>
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Box
        sx={{
          margin: "30px  0px",
        }}
      >
        <hr />
      </Box>
    </Container>
  );
};

export default Categories;
