import { db } from '../../lib/db.js';

export async function POST(req, res) {
  const { addr, image, title, contentid, contenttypeid, areacode, modifiedtime } = await req.json();

  if (!contentid || !title || !addr || !areacode || !contenttypeid) {
    return new Response(JSON.stringify({ message: 'Invalid data' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Check if the place already exists
    const [existingRows] = await db.query('SELECT * FROM Places WHERE contentid = ?', [contentid]);

    if (existingRows.length > 0) {
      // Place exists, record like
      const insertLikeQuery = 'INSERT INTO place_likes (contentid) VALUES (?)';
      await db.query(insertLikeQuery, [contentid]);
      return new Response(JSON.stringify({ message: 'Like recorded' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // Place does not exist, insert place and record like
      const insertPlaceQuery = 'INSERT INTO Places (contentid, addr, image, title, contenttypeid, areacode, modifiedtime) VALUES (?, ?, ?, ?, ?, ?, ?)';
      await db.query(insertPlaceQuery, [contentid, addr, image, title, contenttypeid, areacode, modifiedtime]);

      const insertLikeQuery = 'INSERT INTO place_likes (contentid) VALUES (?)';
      await db.query(insertLikeQuery, [contentid]);
      return new Response(JSON.stringify({ message: 'Place added and like recorded' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error handling like:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
