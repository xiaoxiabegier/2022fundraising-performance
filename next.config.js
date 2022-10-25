/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
    async redirects(){
        return[
            {
                source: "/architectural3638castro",
                destination: "https://storage.googleapis.com/2022fundraising-website/3638/36%2038.pdf",
                permanent: false,
                basePath: false,
            },
            {
                source: "/architectural817825rodney",
                destination: "https://storage.googleapis.com/2022fundraising-website/825/817.pdf",
                permanent: false,
                basePath: false,
            },
            {
                source: "/architectural539blossom",
                destination: "https://storage.googleapis.com/2022fundraising-website/539blossom/539.pdf",
                permanent: false,
                basePath: false,
            },
            {
                source: "/architectural61castro",
                destination: "https://storage.googleapis.com/2022fundraising-website/61castro/61.pdf",
                permanent: false,
                basePath: false,
                
            },
        ]
    }
}

//
//
//const fabLinks = {
//    "3638castro": {architectural: "https://storage.googleapis.com/2022fundraising-website/3638/36%2038.pdf" },
//    "817rodney": {architectural: "https://storage.googleapis.com/2022fundraising-website/825/817.pdf"},
//    "825rodney": {architectural: "https://storage.googleapis.com/2022fundraising-website/825/825.pdf"},
//    "539blossom": {architectural: "https://storage.googleapis.com/2022fundraising-website/539blossom/539.pdf"},
//    "61castro": {architectural: "https://storage.googleapis.com/2022fundraising-website/61castro/61.pdf"}
//}
