"use server";

export const allProduct = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/products", {
      method: "GET",
      cache: "no-store",
    });

    const productInfo = res.json();
    return productInfo;
  } catch (error: any) {
    console.log(error.message);
  }
};
