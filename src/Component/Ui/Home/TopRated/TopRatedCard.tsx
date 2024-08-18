import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import spray from "@/assets/spray.png";

export const discountPriceCalculation = (price: number, discount: number) => {
  const calculatedPrice = price + (discount * price) / 100;
  return calculatedPrice;
};

const TopRatedCard = ({ product }: any) => {
  const discountPrice = discountPriceCalculation(
    product?.price,
    product?.discount
  );

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
          height: {
            xs: "325px",
            sm: "325px",
            md: "300px",
          },
        }}
      >
        <Link href={`/item/${product._id}`}>
          <Image
            src={product.photos ? product?.photos[0] : spray}
            alt="card image"
            height={200}
            width={400}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
        {product.new && (
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
              New
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            display: "inline-flex",
            gap: 3,
          }}
        >
          ${product.price}
          <Typography
            component="span"
            color="primary.main"
            sx={{
              textDecoration: "line-through",
            }}
          >
            ${discountPrice}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
        <Button size="small" variant="outlined">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default TopRatedCard;
