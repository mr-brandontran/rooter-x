export interface BusinessConfig {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  license: string;
  serviceArea: string;
  hours: string;
  googlePlaceId: string | null;
  social: {
    facebook: string;
    instagram: string;
    yelp: string;
    google: string;
  };
  address: string | null;
  addressLines: {
    street: string;
    suite: string;
    cityStateZip: string;
  } | null;
  ownerBio: string | null;
  yearsLicensed: number | null;
  experienceYears: number | null;
  previousWork: string[];
  todos: {
    socialFacebook: string;
    socialInstagram: string;
    socialYelp: string;
    socialGoogle: string;
  };
}

export const BUSINESS: BusinessConfig = {
  name: "Rooter-X Plumbing",
  tagline: "Residential · Commercial",
  phoneDisplay: "(714) 323-3153",
  phoneHref: "tel:+17143233153",
  email: "Rooterxplumbing@gmail.com",
  license: "CSLB Lic. #1008868",
  serviceArea: "Orange County, CA",
  hours: "Open 24/7",
  googlePlaceId: null,
  social: {
    facebook: "TODO: Facebook URL",
    instagram: "TODO: Instagram URL",
    yelp: "TODO: Yelp URL",
    google: "TODO: Google My Business URL",
  },
  address: "1440 N Harbor Blvd Suite 840, Fullerton, CA 92835",
  addressLines: {
    street: "1440 N Harbor Blvd",
    suite: "Suite 840",
    cityStateZip: "Fullerton, CA 92835"
  },
  ownerBio: "20 years of hands-on plumbing and restoration experience across Orange County, having previously worked at VMax Plumbing, PRC Restoration, and Cyclone Plumbing prior to founding Rooter-X Plumbing.",
  yearsLicensed: 20,
  experienceYears: 20,
  previousWork: ["VMax Plumbing", "PRC Restoration", "Cyclone Plumbing"],
  todos: {
    socialFacebook: "Facebook page URL is needed",
    socialInstagram: "Instagram page URL is needed",
    socialYelp: "Yelp profile URL is needed",
    socialGoogle: "Google My Business profile URL is needed",
  },
};
