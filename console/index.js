import { containerAppend, loader, styleAppend, textAppend } from "./lib/_append.js";
import { LOGGER } from "./lib/_log.js";

(async () => {
    await styleAppend().catch((err) => { console.log(err); return }).then(() => {
        containerAppend().then(Container => {
            textAppend(Container).then(() => {
                LOGGER()
            })
        })
    })
})()
