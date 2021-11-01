const AWS = require("aws-sdk");

const ID = "AKIASLOAVINVCXC4QZE6";
const SECRET = "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";

export const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});
