module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                credentials: {
                    accessKeyId: env('S3_ACCESS_KEY_ID'),
                    secretAccessKey: env('S3_ACCESS_SECRET'),
                },
                region: env('S3_REGION'), // e.g "fr-par"
                endpoint: env('S3_ENDPOINT'), // e.g. "https://pwa-cms-s3-api.ln1.eu"
                params: {
                    Bucket: env('S3_BUCKET'),
                },
            },
        },
    },
});
