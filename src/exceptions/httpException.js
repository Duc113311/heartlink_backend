const HandleAPIError = {};

// Lỗi 400
HandleAPIError.ErrorBadRequest = (err, res) => {
  res.status(400).json({
    success: false,
    err,
    msg: "Bad Request",
  });
};

// Lỗi 500
HandleAPIError.ErrorInternalServer = (err, res) => {
  res.status(500).json({
    success: false,
    err,
    msg: "Internal Server Error",
  });
};

// Lỗi 401
HandleAPIError.ErrorUnauthorized = (res) => {
  res.status(401).json({
    success: false,
    msg: "Unauthorized",
  });
};

// Lỗi 403
HandleAPIError.ErrorForbidden = (res) => {
  res.status(403).json({
    success: false,
    msg: "Forbidden",
  });
};


module.exports = HandleAPIError;
