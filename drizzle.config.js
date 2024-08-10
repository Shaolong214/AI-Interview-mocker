/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://EvAI_owner:mKLa9P0UqTNy@ep-damp-math-a7tiqzhn.ap-southeast-2.aws.neon.tech/EvAI?sslmode=require',
    }
  };