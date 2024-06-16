/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MYSQL_HOST: 'trip-mysql2.cbw02e2uyb98.ap-southeast-2.rds.amazonaws.com',
        MYSQL_USER: 'root',
        MYSQL_PASSWORD: 'itec040106',
        MYSQL_DATABASE: 'trip',
    },
    images: {
        domains: ['tong.visitkorea.or.kr'],

    }
};

export default nextConfig;
