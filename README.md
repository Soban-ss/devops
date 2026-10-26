# Real AWS CI/CD demo starter

This is a real, buildable static website project. It is not connected to AWS until you configure your account.

## Local run

Requires Node.js 20+.

```sh
npm install
npm test
npm run build
```

Open `web/index.html` locally. `dist/index.html` is the deployment artifact.

## AWS setup overview

1. Push these project files to a GitHub repository (do not commit credentials).
2. Create a private S3 bucket for deployed files.
3. Create a CodeBuild project using the repository's `buildspec.yml` with a managed image supporting Node.js 20.
4. Create a CodePipeline pipeline with GitHub (via AWS CodeConnections) as source, CodeBuild as build, and S3 as deploy; choose Extract file before deploy.
5. Configure CloudFront with Origin Access Control for the private S3 bucket, default root object `index.html`, and grant CloudFront read access through the bucket policy.
6. Push a change to GitHub, verify pipeline execution and the updated CloudFront site. CloudFront caching may delay updates; use invalidation as needed.

AWS services may incur charges. Configure a billing budget and clean up resources when finished. Never post AWS keys or secrets.
