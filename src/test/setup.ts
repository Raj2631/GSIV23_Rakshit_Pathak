import "@testing-library/jest-dom";

import nodeFetch, { Request, Response } from "node-fetch";

Object.assign(global, { fetch: nodeFetch, Request, Response });
