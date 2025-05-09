const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding...");

  await prisma.item.create({
    data: {
      name: "Bread",
      xstart: 1,
      xend: 2,
      ystart: 3,
      yend: 4,
    }
  })

  console.log("Done")
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
