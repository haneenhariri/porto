import Avatar1 from "../assets/avatar_1.jpg";
import Avatar2 from "../assets/avatar_2.jpg";

const code = `
  function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
  }
  `;
  const code2 = `
  export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
  ): any {
    const tuple: [mixed, mixed, mixed, mixed] = (value: any);
  }
  `;

export const aboutMeData = [
  {
    avatar: Avatar1,
    username: "username",
    specialization: "Created 9 months ago",
    rating: 3,
    code: code,
  },
  {
    avatar: Avatar2,
    username: "username",
    specialization: "",
    rating: 0,
    code: code2,
  },
];
