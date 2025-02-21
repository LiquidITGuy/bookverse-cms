module.exports = ({ env }) => ({
    // ...
    'schemas-to-ts': {
        enabled: true,
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    accessKeyId: env('S3_ACCESS_KEY_ID'),
                    secretAccessKey: env('S3_ACCESS_SECRET'),
                    region: env('S3_REGION'), // e.g "fr-par"
                    s3ForcePathStyle: true,
                    endpoint: env('S3_ENDPOINT'), // e.g. "https://pwa-cms-s3-api.ln1.eu"
                    params: {
                        Bucket: env('S3_BUCKET'),
                        ACL: 'private', // <== set ACL to private
                        signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                    },
                },

            },
        },
    },
});
