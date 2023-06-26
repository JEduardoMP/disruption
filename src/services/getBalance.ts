export const getBalance = async () => {
  try {
    const res = await fetch('http://localhost:3000/balance');
    const result = await res.json()
    return(result);
  } catch (error) {
    console.log("Hubo un error: " + error)
  }
};
