/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MYSQL_HOST: '127.0.0.1',
        MYSQL_USER: 'root',
        MYSQL_PASSWORD: '0311',
        MYSQL_DATABASE: 'trip',
    },
    images: {
        domains: ['tong.visitkorea.or.kr'],

    }
};

export default nextConfig;
