import { PrismaClient } from "@prisma/client";
// import { categories } from "../src/lib/categories.json";
// import { donations } from "../src/lib/categories.json";
import donors from "../src/lib/donors.json";

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    for (const p of donors) {
        const donor = await prisma.donor.create({
            data: {
                name: p.name,
                email: p.email,
                phone: p.phone,
                donations: {
                    create: {
                        category: p.category,
                        amount: p.amount,
                        date: p.date
                    },
                },
            }
        });
        console.log(`Created donor with id: ${donor.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })