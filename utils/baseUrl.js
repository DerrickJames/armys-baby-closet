const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://armys-baby-closet.herokuapp.com"
    : "http://localhost:3000";

export default baseUrl;
