import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
    context: Context): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const toppings: string[] = [
        'mushrooms',
        'mozzarella cheese',
        'pepperoni',
        'onions',
        'green peppers',
        'mushrooms',
        'bacon',
        'beef',
        'onions',
        'pineapple',
    ];

    const pizzaNames: string[] = [
        'Pepperoni',
        'Hawaii',
        'Vesuvio',
        'Miami',
        'Rom',
        'Singapore',
        'Washington',
        'Paris',
    ];

    const randomNumber = (start: number, variance: number) => start + Math.floor(Math.random() * variance);

    const create = (amountOfObjects: number) => [...Array(amountOfObjects).keys()];
    const arrrand = (arrayWithValues: string[]) => arrayWithValues[randomNumber(0, arrayWithValues.length)];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: create(randomNumber(10, 10)).map(() => ({
            name: `${arrrand(pizzaNames)}`,
            version: randomNumber(0, 100),
            price: randomNumber(50, 100),
            rating: randomNumber(1, 5),
            toppings: create(5).map(() => ({
                name: arrrand(toppings),
                quality: randomNumber(1, 10),
            }))
        })),
    };
};

export default httpTrigger;
