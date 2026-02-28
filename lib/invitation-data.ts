// ============================================
// INVITATION DATA - EDIT HERE
// All event details are centralized for easy editing.
// Replace placeholder values with final information.
// ============================================

export const EVENT_DATA = {
  // Baby's name
  babyName: "Alejandro",

  // Nickname for signing
  babyNickname: "Alejandrito",

  // Age turning
  age: 1,

  // Event date display
  dateMonth: "Marzo",
  dateDay: "07",

  // Event time
  time: "03:00 pm",

  // Event location name
  locationName: "Lorem ipsum",

  // Event location address
  locationAddress: "Residencial Lorem ipsum",

  // Map link (Google Maps, Apple Maps, etc.)
  mapLink: "#",

  // Gift registry links
  giftRegistryLinks: [
    {
      label: "Amazon",
      href: "https://www.amazon.com.mx/",
      color: "#868F9B",
      icon: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250139/llanta_icon_t3i07o.svg",
    },
    {
      label: "Liverpool",
      href: "https://www.liverpool.com.mx/tienda/home",
      color: "#FF7170",
      icon: "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250139/casco_icon_ottqxn.svg",
    },
  ],

  // Cloudinary image URLs
  images: {
    triangleFlags:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250140/triangle_flags_soldhh.png",
    carBabyFlag:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772255326/car_baby_flag_image_v2_jtcgfl.png",
    oneImage:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772257760/one_image_orbkpu.png",
    babyHelmet:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250139/baby_helmet_image_jdojzl.png",
    flagBackground:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250140/flag_background_obly6p.png",
    trophy:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250139/copa_image_ybn3pb.png",
    locationIcon:
      "https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250140/ubicacion_icon_i6wjs1.svg",
  },
} as const;
