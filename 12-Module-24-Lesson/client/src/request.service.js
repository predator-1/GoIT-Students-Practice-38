export const getCat = () => {
  return fetch('api/cat').then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    console.log(resp.text);
  });
};
