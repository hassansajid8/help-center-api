This is the backend api server for a simple helper cards page.
Built using ExpressJS and PrismaORM

## Prerequisites

You will need a postgresql server.

## Getting Started

*Note: Use pnpm*

First, install dependencies

```bash
pnpm i
```

Next, create a .env file and add your database url

```bash
DATABASE_URL = # Your postgresql database url
```

*If you want to use a server other than postgresql, update the provider field in prisma/schema.prisma file.*

Now you can run the development server using nodemon

```bash
nodemon
```

## Contact

Report any errors or suggestions to hassansajid.dev@gmail.com
