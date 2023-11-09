import { PrismaClient } from "@prisma/client";
// import distributions from "../src/lib/distributions.json";

const prisma = new PrismaClient();

const userData = [
    {
        name: "Leona",
        email: "leona.s.stevents@comcast.net",
        phone: "303-777-8888",
        donations: {
            create: [
                {
                    amount: 27,
                    category: "medical",
                    date: "01/01/22"
                },
                {            
                    amount: 3,
                    category: "food",
                    date: "06/01/22"
                }
            ]
        }
    },
    {
        name: "Delite Bakery",
        email: "delite.bakery@yahoo.com",
        phone: "914-333-1111",
        donations: {
            create: [
                {
                    amount: 27,
                    category: "food",
                    date: "02/01/22" 
                },
                {
                    amount: 80,
                    category: "food",
                    date: "03/01/22"
                },
                {
                    amount: 40,
                    category: "food",
                    date: "04/01/22"
                },
                {
                    amount: 16,
                    category: "food",
                    date: "05/01/22"
                },
                {
                    amount: 5,
                    category: "food",
                    date: "06/01/22"
                },
                {
                    amount: 80,
                    category: "food",
                    date: "07/01/22"
                }
            ]
        }
    },
    {
        name: "Scott",
        email: "Scott.Letterton@gmail.com",
        phone: "808-555-8888",
        donations: {
            create: [
                {        
                    amount: 40,
                    category: "bedding",
                    date: "01/01/22"
                },
                {
                    amount: 40,
                    category: "food",
                    date: "06/01/22"
                }
            ]
        }
    }
];

const distributions = [
    {
        amount: 3,
        category: "food",
        date: "01/01/22"
    },
    {
        amount: 70,
        category: "bedding",
        date: "01/01/22"
    },
    {
        amount: 80,
        category: "medical",
        date: "01/01/22"
    }
];

async function main() {
    console.log(`Start seeding ...`);

    for (const u of userData) {
        const donor = await prisma.donor.create({
            data: u,
        });
        console.log(`Created donor with id: ${donor.id}`);
    }

    for (const p of distributions) {
        const distribution = await prisma.distribution.create({
            data: p,
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