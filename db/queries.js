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
    const ranking = await prisma.ranking.findMany({
        orderBy: {
            time: 'asc'
        }
    })

    return ranking;
}

async function addRanking(username, time, dateAdded) {
    const newRanking = await prisma.ranking.create({
        data: {
            username,
            time,
            dateAdded,
        }
    })

    return newRanking;
}

async function getReview() {
    const reviews = await prisma.review.findMany({
        orderBy: {
            dateAdded: 'desc'
        }
    })

    return reviews;
}

async function addReview(writer, content, dateAdded) {
    const review = await prisma.review.create({
        data: {
            writer,
            content,
            dateAdded
        }
    })

    return review;
}

module.exports = {
    getItem,
    getItemList,
    getRanking,
    addRanking,
    getReview,
    addReview
}