export default function handler(req, res) {
  res.setPreviewData({ user: "lahiru" });
  //res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
