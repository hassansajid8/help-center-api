import { db } from "./db";

export const newCard = async (title: string, body: string) => {

    const getIfExists = getSpecificCard(title);

    if (await getIfExists != null) {
        return 400;
    }

    const response = await db.cards.create({
        data: {
            title: title,
            description: body,
        },
    });

    return response;
}

export const getCards = async () => {
    const response = await db.cards.findMany({
        select: {
            title: true,
            description: true,
        }
    });
    return response;
}

export const getSpecificCard = async (title: string) => {
    const response = await db.cards.findUnique({
        where: {
            title: title,
        },
        select: {
            title: true,
            description: true,
        },
    });

    return response;
}