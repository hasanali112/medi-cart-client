import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";

const BlogCard = ({ blog }: any) => {
  return (
    <Card
      sx={{
        boxShadow: 0,
        ":hover": {
          boxShadow: 1,
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
        }}
      >
        <Image
          src={blog.image}
          alt="card image"
          height={200}
          width={400}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {blog.recent && (
          <Box
            sx={{
              position: "absolute",
              top: "4px",
              right: "9px",
              backgroundColor: "primary.main",

              padding: "5px 15px",
            }}
          >
            <Typography component="p" color="#fff">
              Recent
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          component="h1"
          fontSize="large"
          fontWeight={700}
        >
          {blog.title.slice(0, 30)}
        </Typography>
        <Typography component="p">{blog.description.slice(0, 50)}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
