import {useStatusStore} from "@/store/status.ts";

const statusStore = useStatusStore()

const pf = async (payload: any) => {
  payload.head.cmdVersion = statusStore.cmdVersion
  //@ts-ignore
  const buffer = window.ltwasm.encrypt(payload)
  const requestOptions: RequestInit = {
    method: "POST",
    redirect: "follow",
    body: buffer,
    headers: {
      "Content-Type": "application/octet-stream",
    },
    //@ts-ignore
    responseType: "arraybuffer",
  };

  const result =  await fetch("https://wxmini.jj5agame.com/p.f", requestOptions);
  //@ts-ignore
  return window.ltwasm.decrypt(await result.arrayBuffer())
};

export const requests = {
  pf,
};
