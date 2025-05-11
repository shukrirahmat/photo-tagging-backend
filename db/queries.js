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

async function getItemList() {
    const itemList = prisma.item.findMany({
        select: {
            name: true
        },
        orderBy: {
            id: 'asc'
        }
    })

    return itemList
}

module.exports = {
    getItem,
    getItemList
}