import { query } from '@/app/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { content_id } = req.body;

    try {
      const place = await query('SELECT * FROM place WHERE place_id = ?', [content_id]);
      if (place.length === 0) {
        await query('INSERT INTO place (place_id, title) VALUES (?, ?)', [content_id, 'Title Placeholder']);
      }

      const placeLike = await query('SELECT * FROM place_likes WHERE place_id = ?', [content_id]);
      if (placeLike.length === 0) {
        await query('INSERT INTO place_likes (place_id, like_count) VALUES (?, ?)', [content_id, 1]);
      } else {
        await query('UPDATE place_likes SET like_count = like_count + 1 WHERE place_id = ?', [content_id]);
      }

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error: 'Database query failed', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
