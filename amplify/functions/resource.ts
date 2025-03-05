import { defineFunction } from "@aws-amplify/backend";
    
export const get_function = defineFunction({
  name: "get_function",
  entry: "./handler.ts"
});