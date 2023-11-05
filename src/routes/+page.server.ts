import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */

export const load = (async () => {
    const response = await prisma.donor.findMany();

    return {feed: response};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        let category = data.get("category");
        let amount = data.get("amount");
        let date = data.get("date");
        let donor = data.get("donor");


        if (!amount || !category || !date || !donor) {
            return fail(400, {amount, category, date, donor, missing: true});
        }

        if(typeof amount != "number" || typeof category != "string" || typeof date != "string" || typeof donor != "string") {
            return fail(400, { incorrect: true});
        }
        // if donor is new, then add new donor
        // if donor was found, refer to unique identifier of donor (id)
        // if donor is anonymous, treat as found w/unique id for "anonymous donor"
        await prisma.donation.create({
            data: {
                amount,
                category,
                date,
                donor: {connect: {id: id}}
            },
        });

        throw redirect(303, `/`);
    }
}