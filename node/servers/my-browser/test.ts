import { handleToolCall } from "./browser";

async function main() {
    const res = await handleToolCall(
        'k_navigate',
        {
            url: 'https://towardsdatascience.com/tag/editors-pick/'
        }
    )

    console.log(res);
}

main();