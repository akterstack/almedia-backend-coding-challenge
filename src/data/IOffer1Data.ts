export interface IOffer1Data {
  // should be mapped to `externalOfferId`
  offer_id: string;
  // should be mapped to `name`
  offer_name: string;
  // should be mapped to `description`
  offer_desc: string;
  // should be mapped to `requirements`
  call_to_action: string;
  // should be mapped to offerUrlTemplate
  offer_url: string;
  // should be mapped to `thumbnail`
  image_url: string;
  // combine platform and device to map to `isDesktop`, `isAndroid`, `isIos`
  platform: 'desktop' | 'mobile'; // possible values are "desktop" | "mobile"
  device: string; // anything else should be considered as android
}
