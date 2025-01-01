
const pf = async () => {
  const requestOptions: RequestInit = {
    method: "POST",
    redirect: "follow",
  };

  return await fetch("https://wxmini.jj5agame.com/p.f", requestOptions);
};

export const requests = {
  pf,
};
