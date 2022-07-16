const Enum = {};

Enum.TypeLogin = {
  Facebook: 1,
  Google: 2,
  PhoneNumber: 3,
};

Enum.HTTPStatusCode = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Forbidden: 403,
  Unauthorized: 401,
  InternalServer: 500,
};

module.exports = Enum;
