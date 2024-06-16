import { db } from '../../lib/db.js';

export async function GET(req, res) {
  try {
    // 최근 작성된 5개의 여행지를 가져오는 쿼리
    const recentPlacesQuery = `
      SELECT *
      FROM Places
      ORDER BY createtime DESC
      LIMIT 4;
    `;
    const [recentPlaces] = await db.query(recentPlacesQuery);

    // 좋아요 수가 많은 상위 5개의 여행지를 가져오는 쿼리
    const topLikedPlacesQuery = `
      SELECT p.*, COUNT(pl.contentid) AS like_count
      FROM Places p
      JOIN Place_likes pl ON p.contentid = pl.contentid
      GROUP BY p.contentid
      ORDER BY like_count DESC
      LIMIT 4;
    `;
    const [topLikedPlaces] = await db.query(topLikedPlacesQuery);

    return new Response(JSON.stringify({ recentPlaces, topLikedPlaces }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
