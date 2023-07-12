export interface IOffer2Data {
  Offer: {
    // should be mapped to `externalOfferId`
    campaign_id: number;
    // should be mapped to `thumbnail`
    icon: string;
    // should be mapped to `name`
    name: string;
    // should be mapped to `offerUrlTemplate`
    tracking_url: string;
    // should be mapped to `requirements`
    instructions: string;
    // should be mapped to `description`
    description: string;
  };
  OS: {
    // this should be mapped to `isAndroid`
    android: boolean;
    // this should be mapped to `isIos`
    ios: boolean;
    // this should be mapped to `isDesktop`
    web: boolean;
  };
}
