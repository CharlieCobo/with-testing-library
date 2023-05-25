import "@testing-library/jest-dom/extend-expect";
import { createSerializer } from "@emotion/jest";

// eslint-disable-next-line no-undef
expect.addSnapshotSerializer(createSerializer());
