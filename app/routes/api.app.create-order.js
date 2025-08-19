// import db from "../db.server";
// export const loader = async ({ request }) => {
// //   const session = await db.session.findFirst();
//   const session = await db.session.find({});
//   return {"massage":" Congrats on  your sku app deployed !","name":"inventory app","session":session};
// };

import db from "../db.server";

export const loader = async ({ request }) => {
  try {
    const sessions = await db.session.findMany(); // Prisma syntax to get all sessions
    return {
      message: "Congrats on your SKU app deployed!",
      name: "Inventory App",
      sessions,
    };
  } catch (error) {
    console.error("Error loading sessions:", error);
    throw new Response("Failed to load sessions", { status: 500 });
  }
};
