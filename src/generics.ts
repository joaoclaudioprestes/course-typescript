const returnValue = <TGenerico>(value: TGenerico) => value; // definimos um generico

const message = returnValue<string>("Hello world!");
const count = returnValue<number>(5); // Relizou a atribuição automatica quando não usamos o generico

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>([
  "1",
  "2",
  "3",
  "4",
]);
const twotValueFromStringArray = getFirstValueFromArray<number>([1, 2, 3, 4]);
