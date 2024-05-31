/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MYSQL_HOST: 'db',
        MYSQL_USER: 'user',
        MYSQL_PASSWORD: 'root',
        MYSQL_DATABASE: 'mydatabase',
    },
    images: {
        domains: ['tong.visitkorea.or.kr'],

    }
};

export default nextConfig;
