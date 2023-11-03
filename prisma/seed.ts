import { PrismaClient } from "@prisma/client";
import donors from "../src/lib/donors.json";
import distributions from "../src/lib/distributions.json";

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    for (const p of donors) {
        const donor = await prisma.donor.create({
            data: {
                name: p.donor.name,
                email: p.donor.email,
                phone: p.donor.phone,
                donations: {
                    create: {
                        amount: p.amount,
                        category: p.category,
                        date: p.date
                    },
                },
            }
        });
        console.log(`Created donor with id: ${donor.id}`);
    }

    for (const p of distributions) {
        const distribution = await prisma.distribution.create({
            data: {
                amount: p.amount,
                category: p.category,
                date: p.date
            }
        });
        console.log(`Created distribution with id: ${distribution.id}`);
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