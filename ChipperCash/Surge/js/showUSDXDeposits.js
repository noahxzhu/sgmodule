try {
  const obj = JSON.parse($response.body);
  obj.isUSDXDepositsAvailable = true;
  const body = JSON.stringify(obj);
  $done({ body }); // return the modified response
} catch (error) {
  $done({}); // return the original response
}
