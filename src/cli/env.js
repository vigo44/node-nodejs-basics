const parseEnv = () => {
  const envs = Object.entries(process.env);
  const envsFilters = envs.filter(([key, _]) => key.startsWith("RSS_"));
  const envMapping = envsFilters.map(([key, val]) => `${key}= ${val}`);
  console.log(envMapping.join("; "));
};

parseEnv();
