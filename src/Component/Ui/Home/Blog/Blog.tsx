import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

const blogData = [
  {
    title: "The Future of Web Development",
    image: blog1,
    description:
      "Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to advanced front-end frameworks.",
    recent: true,
  },
  {
    title: "How to Build a Scalable React Application",
    image: blog2,
    description:
      "A comprehensive guide on designing and building scalable React applications, including best practices and performance optimization tips.",
    recent: true,
  },
  {
    title: "Understanding Node.js: A Beginner's Guide",
    image: blog3,
    description:
      "Get to know the basics of Node.js, including its architecture, event-driven nature, and how to build server-side applications with it.",
    recent: false,
  },
  {
    title: "CSS Grid vs. Flexbox: Which One to Choose?",
    image: blog3,
    description:
      "A detailed comparison between CSS Grid and Flexbox, including their use cases, advantages, and how to choose the right layout system for your needs.",
    recent: false,
  },
];

const Blog = () => {
  return (
    <Container
      sx={{
        marginTop: "50px",
        marginBottom: "150px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          textAlign="center"
          fontSize={{
            xs: "1.8rem",
            sm: "2rem",
          }}
        >
          Recent Blog
        </Typography>
      </Box>
      <Grid container spacing={2} my={6}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
