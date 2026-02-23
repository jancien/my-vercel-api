export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ array: [1, 2, 3, 4] });
}
