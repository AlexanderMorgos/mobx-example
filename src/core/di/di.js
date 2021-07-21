import { Container } from 'inversify';

import * as services from '../../shared/services';

const diContainer = new Container();

const entities = [
  ...Object.values(services),
];

entities.forEach((entity) => {
  diContainer
    .bind(entity.diToken)
    .to(entity)
    .inSingletonScope();
});

export { diContainer };