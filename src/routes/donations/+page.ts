import type { PageLoad } from "./$types";
// not sure why this is broken :(
export const load: PageLoad = async({ parent }) => {
    const { donations } = await parent();
    console.log({donations})
    return { feed: donations };
}



