import prisma from "$lib/prisma";
import type {Actions, PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageServerLoad} */


export const load: PageServerLoad = async () => {
    const response = await prisma.donor.findMany();
    return {feed: response};
};

export const actions: Actions = {
    donationCreate: async({request}) => {
        const data = Object.fromEntries(await request.formData());
        const {category, amount, date, donor, email} = data;
        console.log("From formData: ", category, amount, date, donor, email);
        // if (!amount || !category || !date || !donor || !email) {
        //     return fail(400, {amount, category, date, donor, missing: true});
        // }
    
        // if(typeof amount != "number" || typeof category != "string" || typeof date != "string" || typeof donor != "string" || typeof email != "string") {
        //     return fail(400, { incorrect: true});
        // }
        // if donor is new, then add new donor
        // if donor was found, refer to unique identifier of donor (id)
        // if donor is anonymous, treat as found w/unique id for "anonymous donor"
        await prisma.donation.create({
            data: {
                amount,
                category,
                date,
                donor: {connect: {email: email}}
            },
        });
    
        return {message: `You've added ${data.amount} of ${data.category} from ${data.donor} to our database.`}
        // throw redirect(303, `/`);
    },
    
    inventoryAdjust: async({request}) => {
        const data = Object.fromEntries(await request.formData());
        const {category, amount, date} = data;
        console.log("inventory adjustment form data: ", category, date, amount);
        return {message: `You've added to our database.`}

    }
};