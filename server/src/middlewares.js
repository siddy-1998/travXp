//not found middleware should be last middleware 
const notFound = (req, res, next) => {
  //creating the not found error,
  //setting the 404 status code and
  //call the error handing middleware
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//creating an error handling middleware
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
