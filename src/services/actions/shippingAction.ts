"use server";

export const shippingOrder = async (data: any) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const productInfo = res.json();
    return productInfo;
  } catch (error: any) {
    console.log(error.message);
  }
};
