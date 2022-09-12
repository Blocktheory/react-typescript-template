/* eslint-disable getter-return */
import { AnalyticsBrowser } from "@segment/analytics-next";

export const analytics = AnalyticsBrowser.load({ writeKey: "WyeQ5YVlqPdhnZijQrDtxzJKzFZ6IgCl" });

// export const clickEvent = (eventHeader: string, name: string, props: any) => {
//   window.analytics?.track(eventHeader, {
//     eventName: name,
//     ...props,
//   });
// };

// export const setIdentity = (userId: string, name: string, email: string) => {
//   window.analytics?.identify(userId, {
//     name: name,
//     email: email,
//   });
// };

export class SegmentAnalytics {
  eventName: string;
  eventHeader?: string;
  props?: any;
  name?: string;
  email?: string;

  constructor(eventHeader: string, eventName: string, props?: any, name?: string, email?: string) {
    this.eventHeader = eventHeader;
    this.eventName = eventName;
    this.props = props;
    this.email = email;
    this.name = name;
  }

  get event() {
    if (this.eventName === "click") {
      return this.clickEvent();
    } else if (this.eventName === "indentify") {
      return this.setIndentify();
    }
  }

  clickEvent() {
    return window.analytics?.track(this.eventHeader as string, {
      eventName: this.eventName,
      ...this.props,
    });
  }

  setIndentify() {
    return window.analytics?.identify(this.eventHeader as string, {
      name: this.name,
      email: this.email,
    });
  }
}
