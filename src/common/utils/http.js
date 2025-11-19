const { default: axios } = require("axios");
require("dotenv").config();
const getAddressDetail = async (lat, lng) => {
  const result = await axios
    .get(`${process.env.NESHAN_URL}?lat=${lat}&lng=${lng}`, {
      headers: {
        "Api-Key": process.env.NESHAN_REVERSE_SERVICE_API_KEY,
      },
    })
    .then((res) => res.data);
  return {
    province: result.state,
    city: result.city,
    district: result.district,
    address: result.formatted_address,
  };
};

module.exports = getAddressDetail;