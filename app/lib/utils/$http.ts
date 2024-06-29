import { authToken, logoutModal } from "@/app/lib/store/user.atom";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const requestInterceptor = async (config: any) => {
  try {
    if (["get", "head"].includes(config.method.toLowerCase())) {
      Reflect.deleteProperty(config, "body");
    }
    if (!config.timeout && config.method === "get") {
      config.timeout = 15900; // timeout after 3 seconds of no response
    }

    if (!config.headers["authorization"]) {
      if (config.headers.set) {
        config.headers.set("Authorization", "Bearer " + authToken.get()?.token);
      } else {
        config.headers["authorization"] = `Bearer ${authToken.get()?.token}`;
      }
    }
  } catch (e) {
    console.table({ error: e, code: "Interceptor handler" });
  }
  return config;
};

export const responseErrorInterceptor = async (
  axiosResponse: any | AxiosResponse,
) => {
  const resp = (axiosResponse as any)?.response ?? axiosResponse;
  if (
    resp?.status === 401 ||
    (resp?.data && resp?.data?.error && resp?.data?.error?.redirectTo)
  ) {
    logoutModal.set(true);
  }
  if (!resp?.status) {
    toast.error("Seems you are experiencing issues with connectivity");
  }
  throw axiosResponse;
};
