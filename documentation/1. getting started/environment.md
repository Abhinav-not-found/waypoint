# Environment Variables

Configure the following environment variables in your `.env` file before starting the application.
Only need to configure in server/

## Available Variables

| Variable | Description |
|---|---|
| `PORT` | Port on which the server listens. |
| `MONGODB` | MongoDB connection string used to connect to the database. |
| `NODE_ENV` | Application runtime environment (`development`, `production`, or `test`). |
| `API_BASE_URL` | Base URL of the API. |
| `JWT_SECRET_ACCESS` | Strong, unique secret used to sign access tokens. |
| `JWT_SECRET_REFRESH` | Strong, unique secret used to sign refresh tokens. |
| `CLIENT_URL` | URL of the client application, used for CORS configuration. |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key used for image uploads. |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key. Keep this value confidential. |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint used to access uploaded media. |

## Example Configuration

```env
PORT=3000
MONGODB=mongodb://localhost:27017/your_database
NODE_ENV=development

API_BASE_URL=http://localhost:3000/api
CLIENT_URL=http://localhost:5173

# JWT secrets
JWT_SECRET_ACCESS=your_access_token_secret
JWT_SECRET_REFRESH=your_refresh_token_secret

# Optional: Required only when using ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

## Notes

- Replace all placeholder values with your actual configuration.
- Generate separate, strong, random secrets for `JWT_SECRET_ACCESS` and `JWT_SECRET_REFRESH`.
- ImageKit variables are optional and only required if you use ImageKit for image uploads.
- Never commit your `.env` file or expose sensitive credentials in your repository.
- For production, update URLs, database credentials, and secrets to match your deployment environment.