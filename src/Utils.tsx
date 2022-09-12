import { AnalyticsBrowser } from "@segment/analytics-next";

export const analytics = AnalyticsBrowser.load({ writeKey: "WyeQ5YVlqPdhnZijQrDtxzJKzFZ6IgCl" });

export const clickEvent = (trackHeader: string, name: string, props: any) => {
  window.analytics?.track(trackHeader, {
    eventName: name,
    ...props,
  });
};

export const setIdentity = (userId: string, name: string, email: string) => {
  window.analytics?.identify(userId, {
    name: name,
    email: email,
  });
};
