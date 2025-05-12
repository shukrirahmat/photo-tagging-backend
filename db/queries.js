const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getItem(name) {
    const item = await prisma.item.findUnique({
        where: {
            name
        }
    })

    return item;
}

async function getItemList() {
    const itemList = await prisma.item.findMany({
        select: {
            name: true
        },
        orderBy: {
            id: 'asc'
        }
    })

    return itemList
}

async function getRanking() {
    const ranking = await prisma.records.findMany({
        where: {
            username: {
                not: null
            }
        },
        orderBy: {
            time: 'asc'
        }
    })

    return ranking;
}

async function getComments() {
    const comments = await prisma.records.findMany({
        where: {
            comment: {
                not: null
            }
        },
        orderBy: {
            dateAdded: 'desc'
        }
    })

    return comments
}

async function addRecord(time, username, comment, dateAdded) {
    const record = await prisma.records.create({
        data: {
            time,
            username,
            comment,
            dateAdded
        }
    })

    return record
}

module.exports = {
    getItem,
    getItemList,
    getRanking,
    getComments,
    addRecord,
}