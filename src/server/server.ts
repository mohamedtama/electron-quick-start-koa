import * as Koa from "koa";

import { config } from "./config";
import { logger } from "./logging";
import { routes } from "./routes";

const app = new Koa();

app.use(logger);
app.use(routes);

app.listen(config.port);
export default app;
console.log(`Server running on port ${config.port}`);
