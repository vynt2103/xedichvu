/**
 * GROQ Queries for Sanity (Phase 2)
 * 
 * These queries will be used to fetch data from Sanity CMS in Phase 2.
 * Currently disabled - using mock data.
 */

// Operator schema structure for reference:
/*
operator: {
  _id,
  _type: "operator",
  name,
  slug,
  verified,
  active,
  shortDesc,
  address,
  regions[],
  serviceCategories[],
  contacts: {
    phone,
    zalo,
    facebook,
    instagram,
    whatsapp,
    email,
    website
  },
  logo,
  cover,
  vehicles[] -> [vehicle],
  services[] -> [service]
}

vehicle: {
  _id,
  _type: "vehicle",
  operator -> operator,
  name,
  seat,
  vclass: "thuong" | "cao-cap" | "vip",
  verified,
  images[],
  desc,
  tags[],
  active
}

service: {
  _id,
  _type: "service",
  operator -> operator,
  type: "bao-xe" | "su-kien" | "san-bay" | "tour-rieng",
  title,
  region,
  desc,
  image,
  tags[],
  options: [{
    vehicleType,
    vehicleClass,
    price,
    priceUnit: "chuyen" | "ngay" | "km",
    condition,
    note,
    vehicleRefId -> vehicle._id
  }],
  active
}
*/

// Phase 2: Uncomment and use these queries when connecting to Sanity

export const operatorBySlugQuery = `
  *[_type == "operator" && slug == $slug && active == true][0] {
    _id,
    name,
    slug,
    verified,
    active,
    shortDesc,
    address,
    regions,
    serviceCategories,
    contacts,
    logo,
    cover,
    "vehicles": vehicles[] -> {
      _id,
      name,
      seat,
      vclass,
      verified,
      images,
      desc,
      tags,
      active
    },
    "services": services[] -> {
      _id,
      type,
      title,
      region,
      desc,
      image,
      tags,
      options,
      active
    }
  }
`;

export const allOperatorSlugsQuery = `
  *[_type == "operator" && active == true] {
    "slug": slug.current
  }
`;

// Example usage:
/*
import { sanityClient } from './sanity';
import { operatorBySlugQuery } from './groq';

export async function getOperatorData(slug: string) {
  return sanityClient.fetch(operatorBySlugQuery, { slug });
}
*/

