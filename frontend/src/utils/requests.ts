import {useStatusStore} from "@/store/status.ts";
import {useUserStore} from "@/store/user.ts";
import {ltzj} from "@/utils/wasm.ts";

const statusStore = useStatusStore()
const userStore = useUserStore()

const pf = async (payload: any) => {
  const _payload = payload
  _payload.head.cmdVersion = statusStore.getCmdVersion()
  _payload.head.cmdSequence = statusStore.getCmdSequence()
  _payload.head.sid = userStore.getSid()
  _payload.head.uid = userStore.getUid()
  _payload.head.timestamp = Date.now()
  const buffer = ltzj.encrypt(_payload)
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
  return ltzj.decrypt(await result.arrayBuffer())
};

export const requests = {
  pf,
};
