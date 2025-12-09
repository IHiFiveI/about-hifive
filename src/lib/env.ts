export const env = (key: string) => {
  const variable = import.meta.env[key];

  if (variable === undefined) {
    throw new Error(`No environment variable with "${key}" key was provided;`);
  }

  return variable;
};
