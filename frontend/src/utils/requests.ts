import {useStatusStore} from "@/store/status.ts";
import {useUserStore} from "@/store/user.ts";
import {useSettingStore} from "@/store/setting.ts";
// @ts-ignore
import {ns} from "@/lib/ns.js";

const pf = async (payload: any) => {
  const statusStore = useStatusStore()
  const userStore = useUserStore()
  const settingStore = useSettingStore()
  const _payload = payload
  const unSafeCmd: number[] = [13, 48, 80, 81, 163]
  if(settingStore.safeEnable && unSafeCmd.includes(_payload.head.cmdId)){
    throw new Error('不安全的请求，如果你想发送不安全的请求，请到 `我的-Security` 关闭安全模式。')
  }
  _payload.head.cmdVersion = statusStore.getCmdVersion()
  _payload.head.clientVersion = statusStore.getClientVersion()
  _payload.head.cmdSequence = statusStore.getCmdSequence()
  _payload.head.sid = userStore.getSid()
  _payload.head.uid = userStore.getUid()
  _payload.head.timestamp = Date.now()
  const buffer = ns.enc.encrypt(_payload)
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
  return ns.enc.decrypt(await result.arrayBuffer())
};

export const requests = {
  pf,
};
