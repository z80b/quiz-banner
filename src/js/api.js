export const getSkus = (skus) => {
  const skusArray = skus.split(',').sort(() => (.5 - Math.random()));
  return `${skusArray[0]},${skusArray[1]}`;
}

export const getProducts = (skus) => { 
  fetch(`/p/json/?${skus}`);
  return {
    "TO048AWCTFH0": {
      "images": [
        "\/T\/O\/TO048AWCTFH0_7673498_1_v1.jpg",
        "\/T\/O\/TO048AWCTFH0_7673499_2_v1.jpg",
        "\/T\/O\/TO048AWCTFH0_7673500_3_v1.jpg",
        "\/T\/O\/TO048AWCTFH0_7673501_4_v1.jpg",
        "\/T\/O\/TO048AWCTFH0_7673502_5_v1.jpg",
        "\/T\/O\/TO048AWCTFH0_7689302_9_v1.jpg"
      ],
      "discount": 0,
      "price": 3199.0
    },
    "MA002EWFHCU0": {
      "images": [
        "\/M\/A\/MA002EWFHCU0_8802251_1_v1.jpg",
        "\/M\/A\/MA002EWFHCU0_8802252_2_v1.jpg",
        "\/M\/A\/MA002EWFHCU0_8802253_3_v1.jpg"
      ],
      "discount": 0,
      "price": 1999.0
    },
    "ZE009AWAEFG9": {
      "images": [
        "\/Z\/E\/ZE009AWAEFG9_6061947_1_v2.jpg",
        "\/Z\/E\/ZE009AWAEFG9_6061948_2_v2.jpg",
        "\/Z\/E\/ZE009AWAEFG9_6061949_3_v2.jpg",
        "\/Z\/E\/ZE009AWAEFG9_6061950_4_v2.jpg",
        "\/Z\/E\/ZE009AWAEFG9_6080950_9_v2.jpg"
      ],
      "discount": 759.0,
      "price": 1740.0
    },
    "MP002XW01QX4": {
      "images": [
        "\/M\/P\/MP002XW01QX4_8756051_1_v1.jpg",
        "\/M\/P\/MP002XW01QX4_8756052_2_v1.jpg",
        "\/M\/P\/MP002XW01QX4_8756053_3_v1.jpg"
      ],
      "discount": 0,
      "price": 4990.0
    },
    "MP002XW020OL": {
      "images": [
        "\/M\/P\/MP002XW020OL_8751557_1_v1.jpg",
        "\/M\/P\/MP002XW020OL_8751558_2_v1.jpg",
        "\/M\/P\/MP002XW020OL_8751559_3_v1.jpg"
      ],
      "discount": 0,
      "price": 6500.0
    },
    "MP002XW01QX1": {
      "images": [
        "\/M\/P\/MP002XW01QX1_8756042_1_v1.jpg",
        "\/M\/P\/MP002XW01QX1_8756043_2_v1.jpg",
        "\/M\/P\/MP002XW01QX1_8756044_3_v1.jpg"
      ],
      "discount": 0,
      "price": 4990.0
    }
}};
