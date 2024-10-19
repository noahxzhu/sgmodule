try {
  const obj = JSON.parse($response.body);
  obj.identityVerification.verificationSteps.liveness.status = "NOT_STARTED";
  const body = JSON.stringify(obj);
  $done({ body }); // return the modified response
} catch (e) {
  $done(); // return the original response
}
