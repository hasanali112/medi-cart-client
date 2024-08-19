import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const SingleProductReview = ({ reviews }: any) => {
  return (
    <Box>
      <Typography variant="h5" component="h1" fontWeight={500}>
        Customers Reviews
      </Typography>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Typography component="p" fontWeight={700} color="#ffb800">
        Total Reviews : {reviews.length}
      </Typography>
      {reviews?.map((review: any) => (
        <Box
          key={review._id}
          sx={{
            marginTop: "25px",
            marginBottom: "20px",
          }}
        >
          <Stack direction="row" spacing={4}>
            <Box>
              <Image
                src={review.photo}
                alt="person image"
                width={400}
                height={400}
                style={{
                  borderRadius: "100%",
                  width: "100px",
                  height: "100px",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h6" component="h1" fontWeight={700}>
                {review.name}
              </Typography>
              <Box>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </Box>
              <Typography component="p" fontWeight={500}>
                {review.message}
              </Typography>
            </Box>
          </Stack>
          <Divider
            sx={{
              my: 4,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SingleProductReview;
