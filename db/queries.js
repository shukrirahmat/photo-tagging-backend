const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getItem(name) {
    const item = prisma.item.findUnique({
        where: {
            name
        }
    })

    return item;
}

module.exports = {
    getItem
}