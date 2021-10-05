import { AzureFunction, Context } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context): Promise<void> {
  context.log('Menu endpoint called');

  const onTheMenu = [{ name: 'Pizza', id: 'pizza', path: '/pizza' }];

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: onTheMenu,
  };
};

export default httpTrigger;
