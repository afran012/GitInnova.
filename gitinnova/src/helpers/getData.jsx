export const getData = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return await data;
    
  } catch (error) {
    console.log(error);
  }
};
