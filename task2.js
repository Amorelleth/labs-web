// Напишите функцию для преобразования строки в верблюжий регистр.
const toCamel = text =>
  text.replace(/([-_ ][a-z])/g, group =>
    group
      .toUpperCase()
      .replace("-", "")
      .replace("_", "")
  );
